import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceRecoderComponent } from './voice-recoder.component';

describe('VoiceRecoderComponent', () => {
  let component: VoiceRecoderComponent;
  let fixture: ComponentFixture<VoiceRecoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceRecoderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceRecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
