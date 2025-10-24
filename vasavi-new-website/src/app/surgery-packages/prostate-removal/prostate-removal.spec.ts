import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProstateRemoval } from './prostate-removal';

describe('ProstateRemoval', () => {
  let component: ProstateRemoval;
  let fixture: ComponentFixture<ProstateRemoval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProstateRemoval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProstateRemoval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
