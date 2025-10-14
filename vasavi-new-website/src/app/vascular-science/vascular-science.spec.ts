import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VascularScience } from './vascular-science';

describe('VascularScience', () => {
  let component: VascularScience;
  let fixture: ComponentFixture<VascularScience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VascularScience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VascularScience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
