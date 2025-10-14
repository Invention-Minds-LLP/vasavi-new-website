import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neurology } from './neurology';

describe('Neurology', () => {
  let component: Neurology;
  let fixture: ComponentFixture<Neurology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Neurology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Neurology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
