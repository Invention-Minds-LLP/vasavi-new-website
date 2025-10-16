import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticThrComponent } from './robotic-thr.component';

describe('RoboticThrComponent', () => {
  let component: RoboticThrComponent;
  let fixture: ComponentFixture<RoboticThrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticThrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticThrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
