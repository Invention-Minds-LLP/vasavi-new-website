import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalOncology } from './surgical-oncology';

describe('SurgicalOncology', () => {
  let component: SurgicalOncology;
  let fixture: ComponentFixture<SurgicalOncology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurgicalOncology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurgicalOncology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
