import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticSurgery } from './plastic-surgery';

describe('PlasticSurgery', () => {
  let component: PlasticSurgery;
  let fixture: ComponentFixture<PlasticSurgery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlasticSurgery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlasticSurgery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
