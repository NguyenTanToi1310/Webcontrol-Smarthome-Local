import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationDeviceComponent } from './information-device.component';

describe('InformationDeviceComponent', () => {
  let component: InformationDeviceComponent;
  let fixture: ComponentFixture<InformationDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
