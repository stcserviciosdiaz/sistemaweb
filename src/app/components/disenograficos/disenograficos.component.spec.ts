import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenograficosComponent } from './disenograficos.component';

describe('DisenograficosComponent', () => {
  let component: DisenograficosComponent;
  let fixture: ComponentFixture<DisenograficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenograficosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenograficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
