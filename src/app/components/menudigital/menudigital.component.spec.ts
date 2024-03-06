import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudigitalComponent } from './menudigital.component';

describe('MenudigitalComponent', () => {
  let component: MenudigitalComponent;
  let fixture: ComponentFixture<MenudigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
