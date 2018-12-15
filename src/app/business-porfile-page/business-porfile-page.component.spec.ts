import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPorfilePageComponent } from './business-porfile-page.component';

describe('BusinessPorfilePageComponent', () => {
  let component: BusinessPorfilePageComponent;
  let fixture: ComponentFixture<BusinessPorfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPorfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPorfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
