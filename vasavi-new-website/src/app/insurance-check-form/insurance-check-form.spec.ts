import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCheckForm } from './insurance-check-form';

describe('InsuranceCheckForm', () => {
  let component: InsuranceCheckForm;
  let fixture: ComponentFixture<InsuranceCheckForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceCheckForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceCheckForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
