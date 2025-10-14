import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalOncology } from './medical-oncology';

describe('MedicalOncology', () => {
  let component: MedicalOncology;
  let fixture: ComponentFixture<MedicalOncology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalOncology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalOncology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
