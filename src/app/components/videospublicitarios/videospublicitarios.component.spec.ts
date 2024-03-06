import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideospublicitariosComponent } from './videospublicitarios.component';

describe('VideospublicitariosComponent', () => {
  let component: VideospublicitariosComponent;
  let fixture: ComponentFixture<VideospublicitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideospublicitariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideospublicitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
