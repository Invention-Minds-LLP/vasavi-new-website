import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Physiotherapy } from './physiotherapy';

describe('Physiotherapy', () => {
  let component: Physiotherapy;
  let fixture: ComponentFixture<Physiotherapy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Physiotherapy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Physiotherapy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
