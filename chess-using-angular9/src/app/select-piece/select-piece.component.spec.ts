import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPieceComponent } from './select-piece.component';

describe('SelectPieceComponent', () => {
  let component: SelectPieceComponent;
  let fixture: ComponentFixture<SelectPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
