import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap, map } from 'rxjs';
import { forkJoin } from 'rxjs';

interface BotReply {
  heading: string;
  options?: string[];
  notemsg?: string;
  extra?: any;
}

@Injectable({ providedIn: 'root' })
export class DoctorServices {
  // private apiUrl = 'https://vasavi-hospitals-812956739285.us-east4.run.app/api';
  private apiUrl = "https://backend-812956739285.us-east4.run.app/api"
  private step = 1;
  private state: any = {};

  constructor(private http: HttpClient) { }

  reset(): Observable<BotReply> {
    this.step = 1;
    this.state = {};
    return of({
      heading: '👋 Hello! Welcome to Vasavi Hospitals Help Desk.',
      options: ['Book an Appointment', 'Emergency Service'],
      notemsg: '(Note: Enter 1 or 2)',
    });
  }

  sendMessage(msg: string): Observable<BotReply> {
    console.log(msg, this.step)
    switch (this.step) {
      // Step 0 → choose service
      case 0:
        this.step = 1;
        return of({
          heading: 'Please choose a service:',
          options: ['Book an Appointment', 'Emergency Service'],
          notemsg: '(Enter 1 or 2)',
        });

      // Step 1 → service choice
      case 1:
        console.log(msg)
        if (msg === '1') {
          return this.http.get<any[]>(`${this.apiUrl}/departments`).pipe(
            map((depts) => {
              this.state.depts = depts;
              this.step = 2;
              return {
                heading: 'You selected Book an Appointment. Choose a department:',
                options: depts.map((d) => d.name),
                notemsg: '(Enter department number)',
              };
            })
          );
        }
        if (msg === '2') {
          this.step = 0;
          return of({
            heading: '🚑 In an emergency, call: 08071500500',
          });
        }
        return of({
          heading: 'Invalid input. Please enter 1 or 2.',
          options: ['Book an Appointment', 'Emergency Service'],
        });

      // Step 2 → department → doctor list
      case 2: {
        const idx = parseInt(msg, 10) - 1;
        const dept = this.state.depts?.[idx];
        if (!dept) {
          return of({
            heading: 'Invalid department number.',
            options: this.state.depts.map((d: any) => d.name),
          });
        }
        this.state.dept = dept;
        return this.http.get<any[]>(`${this.apiUrl}/doctors/docbydept`).pipe(
          map((docs) => {
            const filtered = docs.filter(
              (d) => d.departmentId === dept.id
            );
            this.state.docs = filtered;
            this.step = 3;
            return {
              heading: `Department: ${dept.name}. Please choose a doctor:`,
              options: filtered.map((d) => d.name),
              notemsg: '(Enter doctor number)',
            };
          })
        );
      }

      // Step 3 → doctor → ask for date
      case 3: {
        const idx = parseInt(msg, 10) - 1;
        const doc = this.state.docs?.[idx];
        if (!doc) {
          return of({
            heading: 'Invalid doctor number.',
            options: this.state.docs.map((d: any) => d.name),
          });
        }

        this.state.doc = doc;
        const doctorId = doc.id;

        // Step 3: Fetch weekly availability and unavailable dates
        return forkJoin({
          profile: this.http.get<any>(`${this.apiUrl}/doctors/${doctorId}`),
          unavailable: this.http.get<string[]>(
            `${this.apiUrl}/doctors/unavailable-dates?doctorId=${doctorId}`
          ),
        }).pipe(
          map(({ profile, unavailable }) => {
            const weekly = profile.availability || [];
            const dayMap: Record<string, number> = {
              sun: 0,
              mon: 1,
              tue: 2,
              wed: 3,
              thu: 4,
              fri: 5,
              sat: 6,
            };

            const activeDays: number[] = weekly
              .map((a: any) => dayMap[(a.day || '').toLowerCase()])
              .filter((v: any) => v !== undefined);
            const disabledWeekdays = [0, 1, 2, 3, 4, 5, 6].filter(
              (d) => !activeDays.includes(d)
            );

            const disabledDates = Array.isArray(unavailable)
              ? unavailable.map((d) => d.split('T')[0])
              : [];

            const minDate = new Date().toISOString().split('T')[0];

            this.step = 4;
            this.state.calendar = { minDate, disabledWeekdays, disabledDates };

            return {
              heading: `Selected Doctor: ${doc.name}.`,
              notemsg: 'Please select your appointment date:',
              extra: {
                ui: 'date',
                minDate,
                disabledWeekdays,
                disabledDates,
              },
            };
          })
        );
      }


      case 4:
        this.state.date = msg;
        const docId = this.state.doc.id;
        const selectedDate = msg;
        const today = new Date().toISOString().split('T')[0];
        const now = new Date();
      
        return this.http
          .get<any>(`${this.apiUrl}/doctors/availability?doctorId=${docId}&date=${selectedDate}`)
          .pipe(
            map((avail) => {
              const slots: string[] = [];
      
              if (avail?.availableFrom) {
                const ranges = avail.availableFrom.split(','); // e.g. "10:00-13:00,14:00-17:00"
                const slotDuration = avail.slotDuration ? parseInt(avail.slotDuration, 10) : 20;
      
                for (const range of ranges) {
                  const [start, end] = range.split('-').map((s: any) => s.trim());
                  let current = new Date(`${selectedDate}T${start}:00`);
                  const endTime = new Date(`${selectedDate}T${end}:00`);
      
                  while (current < endTime) {
                    const label = current.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true,
                    });
      
                    // 🕒 skip past slots if the date is today
                    if (selectedDate === today && current <= now) {
                      current = new Date(current.getTime() + slotDuration * 60000);
                      continue;
                    }
      
                    slots.push(label);
                    current = new Date(current.getTime() + slotDuration * 60000);
                  }
                }
              }
      
              this.state.slots = slots;
              this.step = 5;
      
              if (slots.length > 0) {
                return {
                  heading: `Date: ${selectedDate}. Choose a time slot:`,
                  options: slots,
                  notemsg: '(Enter slot number)',
                };
              } else {
                // 🗓 Re-show the date picker if no slots
                this.step = 4; // stay on date step
                return {
                  heading: `No slots available on ${selectedDate}.`,
                  notemsg: 'Please select another date.',
                  extra: {
                    ui: 'date',
                    minDate: this.state.calendar?.minDate ?? new Date().toISOString().split('T')[0],
                    disabledWeekdays: this.state.calendar?.disabledWeekdays ?? [],
                    disabledDates: this.state.calendar?.disabledDates ?? [],
                  },
                };
              }
            })
          );
      

      // Step 5 → slot → ask for name
      case 5: {
        const idx = parseInt(msg, 10) - 1;
        const sel = this.state.slots?.[idx];
        if (!sel)
          return of({
            heading: 'Invalid slot. Choose a valid time slot:',
            options: this.state.slots,
          });
        this.state.slot = sel;
        this.step = 6;
        return of({ heading: 'Please enter your full name:' });
      }

      // Step 6 → name → ask phone
      case 6:
        this.state.name = msg;
        this.step = 7;
        return of({
          heading: `Thanks ${msg}. Please enter your phone number:`,
        });

      // Step 7 → phone → confirm summary
      case 7:
        this.state.phone = msg;
        this.step = 8;
        return of({
          heading: 'Please confirm your appointment:',
          options: ['Confirm', 'Cancel'],
          notemsg: '(Enter 1 or 2)',
          extra: {
            patientName: this.state.name,
            doctorName: this.state.doc.name,
            department: this.state.dept.name,
            date: this.state.date,
            timeslot: this.state.slot,
            phone: msg,
          },
        });

      // Step 8 → confirm
      case 8:
        if (msg === '1') {
          const data = {
            patientName: this.state.name,
            phoneNumber: this.state.phone,
            doctorId: this.state.doc.id,
            doctorName: this.state.doc.name,
            department: this.state.dept.name,
            date: this.state.date,
            time: this.state.slot,
            status: 'pending',
            requestVia: 'Online',
            email: ''
          };

          // 1️⃣ Create the appointment
          this.http.post(`${this.apiUrl}/appointments`, data).subscribe({
            next: () => {
              // 2️⃣ Build the email payload after booking succeeds
              const emailParams = {
                doctorName: this.state.doc.name || '',
                doctorDesignation: this.state.dept.name || '',
                patientName: this.state.name || '',
                patientEmail: this.state.email || '',
                patientContact: this.state.phone || '',
                appointmentTime: this.state.slot || '',
                appointmentDate: this.state.date || '',
                message: this.state.message || ''
              };

              const emailPayload = {
                // to: ['digital@vasavihospitals.com', 'Vinay.d@vasavihospitals.com'], // Add any other recipients here
                to: ['inventionmindsblr@gmail.com'],
                status: 'frontoffice',
                appointmentDetails: emailParams
              };

              // 3️⃣ Send the email
              this.http
                .post(`${this.apiUrl}/email/send-email`, emailPayload)
                .subscribe({
                  next: () => console.log('✅ Email sent successfully'),
                  error: (err) => console.error('❌ Error sending email', err)
                });
            },
            error: (err) => {
              console.error('❌ Error creating appointment', err);
            }
          });

          // Reset flow and thank the user
          this.step = 0;
          return of({
            heading: `✅ Thank you ${this.state.name}! Your appointment has been booked.`,
          });
        } else {
          this.step = 0;
          return of({ heading: 'Appointment cancelled.' });
        }


      default:
        this.step = 0;
        return of({
          heading: 'Hello! Welcome to Vasavi Hospitals Help Desk.',
          options: ['Book an Appointment', 'Emergency Service'],
        });
    }
  }
}
