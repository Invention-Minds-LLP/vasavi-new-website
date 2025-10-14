import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anesthesiology } from './anesthesiology';

describe('Anesthesiology', () => {
  let component: Anesthesiology;
  let fixture: ComponentFixture<Anesthesiology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anesthesiology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anesthesiology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
