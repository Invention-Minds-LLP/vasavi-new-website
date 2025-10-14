import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bariatricsurgery } from './bariatricsurgery';

describe('Bariatricsurgery', () => {
  let component: Bariatricsurgery;
  let fixture: ComponentFixture<Bariatricsurgery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bariatricsurgery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bariatricsurgery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
