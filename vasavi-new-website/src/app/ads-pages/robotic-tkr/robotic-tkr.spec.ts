import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticTkr } from './robotic-tkr';

describe('RoboticTkr', () => {
  let component: RoboticTkr;
  let fixture: ComponentFixture<RoboticTkr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticTkr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticTkr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
