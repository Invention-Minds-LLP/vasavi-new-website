import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoboticHysterectomy } from './robotic-hysterectomy';

describe('RoboticHysterectomy', () => {
  let component: RoboticHysterectomy;
  let fixture: ComponentFixture<RoboticHysterectomy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticHysterectomy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticHysterectomy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
