import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticHernia } from './robotic-hernia';

describe('RoboticHernia', () => {
  let component: RoboticHernia;
  let fixture: ComponentFixture<RoboticHernia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticHernia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticHernia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
