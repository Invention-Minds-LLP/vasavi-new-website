import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstetricsGynaecology } from './obstetrics-gynaecology';

describe('ObstetricsGynaecology', () => {
  let component: ObstetricsGynaecology;
  let fixture: ComponentFixture<ObstetricsGynaecology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObstetricsGynaecology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObstetricsGynaecology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
