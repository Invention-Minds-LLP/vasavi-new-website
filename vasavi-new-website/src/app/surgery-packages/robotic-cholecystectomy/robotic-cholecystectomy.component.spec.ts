import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticCholecystectomyComponent } from './robotic-cholecystectomy.component';

describe('RoboticCholecystectomyComponent', () => {
  let component: RoboticCholecystectomyComponent;
  let fixture: ComponentFixture<RoboticCholecystectomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticCholecystectomyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticCholecystectomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
