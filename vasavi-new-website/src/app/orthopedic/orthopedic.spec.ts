import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orthopedic } from './orthopedic';

describe('Orthopedic', () => {
  let component: Orthopedic;
  let fixture: ComponentFixture<Orthopedic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orthopedic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orthopedic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
