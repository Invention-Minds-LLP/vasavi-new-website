import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Urodynamic } from './urodynamic';

describe('Urodynamic', () => {
  let component: Urodynamic;
  let fixture: ComponentFixture<Urodynamic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Urodynamic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Urodynamic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
