import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbdateBusinessProfilePageComponent } from './ubdate-business-profile-page.component';

describe('UbdateBusinessProfilePageComponent', () => {
  let component: UbdateBusinessProfilePageComponent;
  let fixture: ComponentFixture<UbdateBusinessProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbdateBusinessProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbdateBusinessProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
