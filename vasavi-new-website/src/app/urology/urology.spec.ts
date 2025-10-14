import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Urology } from './urology';

describe('Urology', () => {
  let component: Urology;
  let fixture: ComponentFixture<Urology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Urology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Urology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
