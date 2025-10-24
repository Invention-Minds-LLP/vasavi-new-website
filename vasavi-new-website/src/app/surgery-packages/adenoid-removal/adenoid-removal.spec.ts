import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdenoidRemoval } from './adenoid-removal';

describe('AdenoidRemoval', () => {
  let component: AdenoidRemoval;
  let fixture: ComponentFixture<AdenoidRemoval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdenoidRemoval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdenoidRemoval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
