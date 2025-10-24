import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FistulaSurgery } from './fistula-surgery';

describe('FistulaSurgery', () => {
  let component: FistulaSurgery;
  let fixture: ComponentFixture<FistulaSurgery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FistulaSurgery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FistulaSurgery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
