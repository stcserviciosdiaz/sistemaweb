import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanaadsComponent } from './campanaads.component';

describe('CampanaadsComponent', () => {
  let component: CampanaadsComponent;
  let fixture: ComponentFixture<CampanaadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampanaadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
