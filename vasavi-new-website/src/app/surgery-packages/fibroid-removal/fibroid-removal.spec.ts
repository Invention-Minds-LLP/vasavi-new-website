import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibroidRemoval } from './fibroid-removal';

describe('FibroidRemoval', () => {
  let component: FibroidRemoval;
  let fixture: ComponentFixture<FibroidRemoval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FibroidRemoval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibroidRemoval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
