import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionCentersComponent } from './adoption-centers.component';

describe('AdoptionCentersComponent', () => {
  let component: AdoptionCentersComponent;
  let fixture: ComponentFixture<AdoptionCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
