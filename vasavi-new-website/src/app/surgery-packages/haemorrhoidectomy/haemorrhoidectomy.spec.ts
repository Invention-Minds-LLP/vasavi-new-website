import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Haemorrhoidectomy } from './haemorrhoidectomy';

describe('Haemorrhoidectomy', () => {
  let component: Haemorrhoidectomy;
  let fixture: ComponentFixture<Haemorrhoidectomy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Haemorrhoidectomy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Haemorrhoidectomy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
