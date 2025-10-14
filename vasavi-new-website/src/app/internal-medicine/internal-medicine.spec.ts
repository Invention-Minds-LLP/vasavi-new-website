import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalMedicine } from './internal-medicine';

describe('InternalMedicine', () => {
  let component: InternalMedicine;
  let fixture: ComponentFixture<InternalMedicine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalMedicine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalMedicine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
