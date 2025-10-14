import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nephrology } from './nephrology';

describe('Nephrology', () => {
  let component: Nephrology;
  let fixture: ComponentFixture<Nephrology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nephrology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nephrology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
