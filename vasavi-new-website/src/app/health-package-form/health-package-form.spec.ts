import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPackageForm } from './health-package-form';

describe('HealthPackageForm', () => {
  let component: HealthPackageForm;
  let fixture: ComponentFixture<HealthPackageForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthPackageForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthPackageForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
