import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dentistry } from './dentistry';

describe('Dentistry', () => {
  let component: Dentistry;
  let fixture: ComponentFixture<Dentistry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dentistry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dentistry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
