import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceSection } from './insurance-section';

describe('InsuranceSection', () => {
  let component: InsuranceSection;
  let fixture: ComponentFixture<InsuranceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
