import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkWidgetComponent } from './sdk-ui';

describe('SdkWidgetComponent', () => {
  let component: SdkWidgetComponent;
  let fixture: ComponentFixture<SdkWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdkWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
