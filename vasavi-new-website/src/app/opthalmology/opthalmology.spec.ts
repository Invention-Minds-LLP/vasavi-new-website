import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opthalmology } from './opthalmology';

describe('Opthalmology', () => {
  let component: Opthalmology;
  let fixture: ComponentFixture<Opthalmology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opthalmology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opthalmology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
