import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyCriticalCare } from './emergency-critical-care';

describe('EmergencyCriticalCare', () => {
  let component: EmergencyCriticalCare;
  let fixture: ComponentFixture<EmergencyCriticalCare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyCriticalCare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyCriticalCare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
