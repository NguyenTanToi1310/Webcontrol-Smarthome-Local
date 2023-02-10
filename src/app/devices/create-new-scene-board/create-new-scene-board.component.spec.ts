import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSceneBoardComponent } from './create-new-scene-board.component';

describe('CreateNewSceneBoardComponent', () => {
  let component: CreateNewSceneBoardComponent;
  let fixture: ComponentFixture<CreateNewSceneBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSceneBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSceneBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
