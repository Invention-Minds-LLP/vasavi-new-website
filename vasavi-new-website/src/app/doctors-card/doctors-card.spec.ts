import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsCard } from './doctors-card';

describe('DoctorsCard', () => {
  let component: DoctorsCard;
  let fixture: ComponentFixture<DoctorsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
