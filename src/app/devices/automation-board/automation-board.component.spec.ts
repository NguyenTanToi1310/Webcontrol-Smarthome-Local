import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationBoardComponent } from './automation-board.component';

describe('AutomationBoardComponent', () => {
  let component: AutomationBoardComponent;
  let fixture: ComponentFixture<AutomationBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomationBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
