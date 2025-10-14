import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalGastroenterology } from './surgical-gastroenterology';

describe('SurgicalGastroenterology', () => {
  let component: SurgicalGastroenterology;
  let fixture: ComponentFixture<SurgicalGastroenterology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurgicalGastroenterology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurgicalGastroenterology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
