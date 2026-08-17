import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { Cghs } from './cghs';

describe('Cghs', () => {
  let component: Cghs;
  let fixture: ComponentFixture<Cghs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cghs],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Cghs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets the CGHS page title', () => {
    expect(document.title).toContain('CGHS');
  });

  it('exposes the services listed in the client document', () => {
    expect(component.services.length).toBe(9);
    expect(component.advancedSurgeries.length).toBe(12);
  });
});
