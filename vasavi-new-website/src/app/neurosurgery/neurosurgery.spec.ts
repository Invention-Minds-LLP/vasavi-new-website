import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neurosurgery } from './neurosurgery';

describe('Neurosurgery', () => {
  let component: Neurosurgery;
  let fixture: ComponentFixture<Neurosurgery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Neurosurgery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Neurosurgery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
