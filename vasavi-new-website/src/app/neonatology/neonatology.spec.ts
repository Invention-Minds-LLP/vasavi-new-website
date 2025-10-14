import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neonatology } from './neonatology';

describe('Neonatology', () => {
  let component: Neonatology;
  let fixture: ComponentFixture<Neonatology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Neonatology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Neonatology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
