import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPopup } from './coupon-popup';

describe('CouponPopup', () => {
  let component: CouponPopup;
  let fixture: ComponentFixture<CouponPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
