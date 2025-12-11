import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorDoctorProfile } from './senior-doctor-profile';

describe('SeniorDoctorProfile', () => {
  let component: SeniorDoctorProfile;
  let fixture: ComponentFixture<SeniorDoctorProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeniorDoctorProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeniorDoctorProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
