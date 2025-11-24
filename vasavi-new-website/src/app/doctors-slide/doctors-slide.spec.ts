import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsSlide } from './doctors-slide';

describe('DoctorsSlide', () => {
  let component: DoctorsSlide;
  let fixture: ComponentFixture<DoctorsSlide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsSlide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsSlide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
