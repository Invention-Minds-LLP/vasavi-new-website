import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pulmonology } from './pulmonology';

describe('Pulmonology', () => {
  let component: Pulmonology;
  let fixture: ComponentFixture<Pulmonology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pulmonology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pulmonology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
