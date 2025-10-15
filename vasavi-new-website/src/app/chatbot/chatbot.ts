import { Component, Output, EventEmitter } from '@angular/core';
import { DoctorServices } from '../services/doctor-service/doctor-services';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from "primeng/datepicker";
@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DatePicker],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css'
})
export class Chatbot {
  messages: { from: 'bot' | 'user'; text: string; reply?: any }[] = [];
  inputValue = '';
  selectedDate: Date | null = null;
  minDate: any = new Date;
  @Output() closeChat = new EventEmitter<void>();


  constructor(private chat: DoctorServices) {}

  ngOnInit() {
    this.chat.reset().subscribe((r) => this.addBot(r));
  }

  addBot(r: any) {
    this.messages.push({ from: 'bot', text: r.heading, reply: r });
    setTimeout(() => this.scrollToBottom(), 100);
  }

  send() {
    const msg = this.inputValue.trim();
    if (!msg) return;
    this.messages.push({ from: 'user', text: msg });
    this.inputValue = '';
    this.chat.sendMessage(msg).subscribe((r) => this.addBot(r));
  }
  
  sendOption(opt: any, num?: number, label?: string) {
    let value: string = '';
  
    // 🗓 Handle PrimeNG datepicker input (keep in local time)
    if (opt instanceof Date) {
      const local = new Date(opt.getTime() - opt.getTimezoneOffset() * 60000);
      value = local.toISOString().split('T')[0]; // "YYYY-MM-DD"
    } else if (opt && typeof opt === 'object' && 'value' in opt) {
      const dateVal = (opt as any).value;
      if (dateVal instanceof Date) {
        const local = new Date(dateVal.getTime() - dateVal.getTimezoneOffset() * 60000);
        value = local.toISOString().split('T')[0];
      } else {
        value = String(dateVal);
      }
    } else if (num !== undefined) {
      value = String(num);
    } else {
      value = String(opt);
    }
  
    console.log('📅 Selected value:', value);
  
    // ✅ Show readable text to user — not just the number
    const displayText = label ?? (typeof opt === 'string' ? opt : value);
    this.messages.push({ from: 'user', text: displayText });
  
    // 🧠 Find the latest bot message with options and clear them
    const lastBot = [...this.messages].reverse().find(
      (m) => m.from === 'bot' && m.reply?.options
    );
    // if (lastBot) lastBot.reply.options = [];
  
    console.log('🚀 Sending to backend:', value);
  
    this.chat.sendMessage(value).subscribe({
      next: (r) => this.addBot(r),
      error: (err) => console.error('❌ Chat send error:', err),
    });
  }


  close() {
    this.closeChat.emit();
  }
  
  logEvent(){
    console.log('date')
  }
    // 🟢 Add helper methods for p-calendar (fixes toDate / toDateArray)
    toDate(dateStr: string): Date {
      return dateStr ? new Date(dateStr) : new Date();
    }
  
    toDateArray(arr: string[]): Date[] {
      return Array.isArray(arr) ? arr.map((d) => new Date(d)) : [];
    }
  
    private scrollToBottom() {
      const chatbox = document.getElementById('chatbox');
      if (chatbox) chatbox.scrollTop = chatbox.scrollHeight;
    }
  
  
}
