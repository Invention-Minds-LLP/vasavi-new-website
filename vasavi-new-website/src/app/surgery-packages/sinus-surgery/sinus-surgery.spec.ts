import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinusSurgery } from './sinus-surgery';

describe('SinusSurgery', () => {
  let component: SinusSurgery;
  let fixture: ComponentFixture<SinusSurgery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinusSurgery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinusSurgery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
