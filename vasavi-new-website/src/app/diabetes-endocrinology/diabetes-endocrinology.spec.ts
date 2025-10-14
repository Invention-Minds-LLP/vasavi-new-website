import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesEndocrinology } from './diabetes-endocrinology';

describe('DiabetesEndocrinology', () => {
  let component: DiabetesEndocrinology;
  let fixture: ComponentFixture<DiabetesEndocrinology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiabetesEndocrinology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiabetesEndocrinology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
