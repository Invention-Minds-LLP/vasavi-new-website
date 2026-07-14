import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondOpinionPopup } from './second-opinion-popup';

describe('SecondOpinionPopup', () => {
  let component: SecondOpinionPopup;
  let fixture: ComponentFixture<SecondOpinionPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondOpinionPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondOpinionPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
