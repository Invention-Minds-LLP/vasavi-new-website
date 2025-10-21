import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFormAds } from './pop-up-form-ads';

describe('PopUpFormAds', () => {
  let component: PopUpFormAds;
  let fixture: ComponentFixture<PopUpFormAds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpFormAds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpFormAds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
