import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dermatology } from './dermatology';

describe('Dermatology', () => {
  let component: Dermatology;
  let fixture: ComponentFixture<Dermatology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dermatology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dermatology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
