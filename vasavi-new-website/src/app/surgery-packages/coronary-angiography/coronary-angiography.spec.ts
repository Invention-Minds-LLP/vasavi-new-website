import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaryAngiography } from './coronary-angiography';

describe('CoronaryAngiography', () => {
  let component: CoronaryAngiography;
  let fixture: ComponentFixture<CoronaryAngiography>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoronaryAngiography]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoronaryAngiography);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
