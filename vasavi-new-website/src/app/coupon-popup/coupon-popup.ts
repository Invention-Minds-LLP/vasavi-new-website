import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface CouponClaimData {
  name: string;
  phone: string;
}

/**
 * Reusable two-step coupon popup:
 *  - "claim" view: quick name + phone form (no OTP - matches original
 *    marketing design where the coupon is a low-friction incentive).
 *  - "reveal" view: shows the generated coupon code, expiry, benefits
 *    and a "Call Now" CTA once the claim form is submitted.
 *
 * Code generation stays inside this component so any page can drop it in
 * and get a working coupon widget without re-implementing the logic.
 * The claim view resets automatically each time `isOpen` flips to true.
 */
@Component({
  selector: 'app-coupon-popup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './coupon-popup.html',
  styleUrl: './coupon-popup.css',
})
export class CouponPopup implements OnChanges {
  @Input() isOpen = false;
  @Input() phoneNumber = '+918000000000';

  @Output() close = new EventEmitter<void>();
  @Output() claimed = new EventEmitter<CouponClaimData>();

  view: 'claim' | 'reveal' = 'claim';
  couponCode = '';
  couponExpiry = '';
  copied = false;

  claimForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.claimForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    });
  }

  get nameError(): string {
    const c = this.claimForm.get('name');
    if (c?.hasError('required')) return 'Name is required';
    if (c?.hasError('minlength')) return 'Name must be at least 3 characters';
    return '';
  }

  get phoneError(): string {
    const c = this.claimForm.get('phone');
    if (c?.hasError('required')) return 'Mobile number is required';
    if (c?.hasError('pattern')) return 'Enter a valid 10-digit Indian mobile number';
    return '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && this.isOpen) {
      this.resetToClaim();
    }
  }

  /** Reset to the claim view - runs automatically whenever the popup opens. */
  resetToClaim(): void {
    this.view = 'claim';
    this.copied = false;
    this.claimForm.reset();
  }

  closePopup(): void {
    this.close.emit();
  }

  submitClaim(): void {
    if (this.claimForm.invalid) {
      this.claimForm.markAllAsTouched();
      return;
    }

    const { name, phone } = this.claimForm.value;
    this.couponCode = this.generateCode();
    this.couponExpiry = this.getExpiry();
    this.view = 'reveal';

    this.claimed.emit({ name, phone });
  }

  copyCode(): void {
    navigator.clipboard?.writeText(this.couponCode).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2500);
    });
  }

  private generateCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'VH-';
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }

  private getExpiry(): string {
    const d = new Date();
    d.setDate(d.getDate() + 15);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
