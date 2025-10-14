import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiverHpbCare } from './liver-hpb-care';

describe('LiverHpbCare', () => {
  let component: LiverHpbCare;
  let fixture: ComponentFixture<LiverHpbCare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiverHpbCare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiverHpbCare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
