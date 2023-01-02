import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameGroupBoardComponent } from './rename-group-board.component';

describe('RenameGroupBoardComponent', () => {
  let component: RenameGroupBoardComponent;
  let fixture: ComponentFixture<RenameGroupBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenameGroupBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameGroupBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
