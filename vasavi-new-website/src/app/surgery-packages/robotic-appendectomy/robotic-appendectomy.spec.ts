import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticAppendectomy } from './robotic-appendectomy';

describe('RoboticAppendectomy', () => {
  let component: RoboticAppendectomy;
  let fixture: ComponentFixture<RoboticAppendectomy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticAppendectomy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticAppendectomy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
