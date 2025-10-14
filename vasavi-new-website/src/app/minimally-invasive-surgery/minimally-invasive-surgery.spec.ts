import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimallyInvasiveSurgery } from './minimally-invasive-surgery';

describe('MinimallyInvasiveSurgery', () => {
  let component: MinimallyInvasiveSurgery;
  let fixture: ComponentFixture<MinimallyInvasiveSurgery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimallyInvasiveSurgery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimallyInvasiveSurgery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
