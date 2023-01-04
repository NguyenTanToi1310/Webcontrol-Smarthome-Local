import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameNewGroupBoardComponent } from './name-new-group-board.component';

describe('NameNewGroupBoardComponent', () => {
  let component: NameNewGroupBoardComponent;
  let fixture: ComponentFixture<NameNewGroupBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameNewGroupBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameNewGroupBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
