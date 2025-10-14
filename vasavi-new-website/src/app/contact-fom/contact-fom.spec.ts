import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFom } from './contact-fom';

describe('ContactFom', () => {
  let component: ContactFom;
  let fixture: ComponentFixture<ContactFom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
