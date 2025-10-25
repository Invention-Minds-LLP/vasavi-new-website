import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvarianCystectomy } from './ovarian-cystectomy';

describe('OvarianCystectomy', () => {
  let component: OvarianCystectomy;
  let fixture: ComponentFixture<OvarianCystectomy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OvarianCystectomy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvarianCystectomy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
