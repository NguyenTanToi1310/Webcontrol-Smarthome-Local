import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListDeviceComponent } from './show-list-device.component';

describe('ShowListDeviceComponent', () => {
  let component: ShowListDeviceComponent;
  let fixture: ComponentFixture<ShowListDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
