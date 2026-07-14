import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { HerniaComponent } from './hernia.component';

describe('HerniaComponent', () => {
  let component: HerniaComponent;
  let fixture: ComponentFixture<HerniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerniaComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(HerniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
