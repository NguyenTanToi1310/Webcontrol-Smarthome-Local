import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutomationConditionComponent } from './edit-automation-condition.component';

describe('EditAutomationConditionComponent', () => {
  let component: EditAutomationConditionComponent;
  let fixture: ComponentFixture<EditAutomationConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAutomationConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAutomationConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
