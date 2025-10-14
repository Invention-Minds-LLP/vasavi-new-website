import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralMaxillofacialSurgery } from './oral-maxillofacial-surgery';

describe('OralMaxillofacialSurgery', () => {
  let component: OralMaxillofacialSurgery;
  let fixture: ComponentFixture<OralMaxillofacialSurgery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OralMaxillofacialSurgery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OralMaxillofacialSurgery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
