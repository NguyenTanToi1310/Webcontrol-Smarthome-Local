import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupControllerBoardComponent } from './group-controller-board.component';

describe('GroupControllerBoardComponent', () => {
  let component: GroupControllerBoardComponent;
  let fixture: ComponentFixture<GroupControllerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupControllerBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupControllerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
