import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maternity } from './maternity';

describe('Maternity', () => {
  let component: Maternity;
  let fixture: ComponentFixture<Maternity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maternity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maternity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
