import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackForm } from './callback-form';

describe('CallbackForm', () => {
  let component: CallbackForm;
  let fixture: ComponentFixture<CallbackForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallbackForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallbackForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
