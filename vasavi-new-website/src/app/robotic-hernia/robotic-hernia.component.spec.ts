import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticHerniaComponent } from './robotic-hernia.component';

describe('RoboticHerniaComponent', () => {
  let component: RoboticHerniaComponent;
  let fixture: ComponentFixture<RoboticHerniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticHerniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticHerniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
