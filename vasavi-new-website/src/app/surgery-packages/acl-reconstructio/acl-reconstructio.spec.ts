import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACLReconstructio } from './acl-reconstructio';

describe('ACLReconstructio', () => {
  let component: ACLReconstructio;
  let fixture: ComponentFixture<ACLReconstructio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACLReconstructio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACLReconstructio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
