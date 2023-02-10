import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSceneBoardComponent } from './edit-scene-board.component';

describe('EditSceneBoardComponent', () => {
  let component: EditSceneBoardComponent;
  let fixture: ComponentFixture<EditSceneBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSceneBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSceneBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
