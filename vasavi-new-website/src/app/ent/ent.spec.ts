import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ent } from './ent';

describe('Ent', () => {
  let component: Ent;
  let fixture: ComponentFixture<Ent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
