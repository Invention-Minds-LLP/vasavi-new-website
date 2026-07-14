import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { Tonsillectomy } from './tonsillectomy';

describe('Tonsillectomy', () => {
  let component: Tonsillectomy;
  let fixture: ComponentFixture<Tonsillectomy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tonsillectomy],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Tonsillectomy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
