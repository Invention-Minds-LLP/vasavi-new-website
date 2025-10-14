import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Psychiatry } from './psychiatry';

describe('Psychiatry', () => {
  let component: Psychiatry;
  let fixture: ComponentFixture<Psychiatry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Psychiatry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Psychiatry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
