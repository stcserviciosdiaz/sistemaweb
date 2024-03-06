import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaswebComponent } from './paginasweb.component';

describe('PaginaswebComponent', () => {
  let component: PaginaswebComponent;
  let fixture: ComponentFixture<PaginaswebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaswebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaswebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
