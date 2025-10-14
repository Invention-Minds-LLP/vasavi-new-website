import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalGastroenterology } from './medical-gastroenterology';

describe('MedicalGastroenterology', () => {
  let component: MedicalGastroenterology;
  let fixture: ComponentFixture<MedicalGastroenterology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalGastroenterology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalGastroenterology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
