import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticTkrComponent } from './robotic-tkr.component';

describe('RoboticTkrComponent', () => {
  let component: RoboticTkrComponent;
  let fixture: ComponentFixture<RoboticTkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticTkrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticTkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
