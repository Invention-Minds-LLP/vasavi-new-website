import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionDietetics } from './nutrition-dietetics';

describe('NutritionDietetics', () => {
  let component: NutritionDietetics;
  let fixture: ComponentFixture<NutritionDietetics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionDietetics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionDietetics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
