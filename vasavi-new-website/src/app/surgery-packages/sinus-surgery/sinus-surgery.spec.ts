import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { SinusSurgery } from './sinus-surgery';

describe('SinusSurgery', () => {
  let component: SinusSurgery;
  let fixture: ComponentFixture<SinusSurgery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinusSurgery],
      providers: [provideRouter([]), provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinusSurgery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
