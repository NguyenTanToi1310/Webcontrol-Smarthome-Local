import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewGroupBoardComponent } from './create-new-group-board.component';

describe('CreateNewGroupBoardComponent', () => {
  let component: CreateNewGroupBoardComponent;
  let fixture: ComponentFixture<CreateNewGroupBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewGroupBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewGroupBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
