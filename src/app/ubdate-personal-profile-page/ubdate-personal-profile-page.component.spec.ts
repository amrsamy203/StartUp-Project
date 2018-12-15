import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbdatePersonalProfilePageComponent } from './ubdate-personal-profile-page.component';

describe('UbdatePersonalProfilePageComponent', () => {
  let component: UbdatePersonalProfilePageComponent;
  let fixture: ComponentFixture<UbdatePersonalProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbdatePersonalProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbdatePersonalProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
