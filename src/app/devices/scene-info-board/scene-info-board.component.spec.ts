import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneInfoBoardComponent } from './scene-info-board.component';

describe('SceneInfoBoardComponent', () => {
  let component: SceneInfoBoardComponent;
  let fixture: ComponentFixture<SceneInfoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneInfoBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneInfoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
