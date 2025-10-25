import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTAngiography } from './ct-angiography';

describe('CTAngiography', () => {
  let component: CTAngiography;
  let fixture: ComponentFixture<CTAngiography>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTAngiography]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTAngiography);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
