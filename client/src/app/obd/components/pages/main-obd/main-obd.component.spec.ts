import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainObdComponent } from './main-obd.component';

describe('MainObdComponent', () => {
  let component: MainObdComponent;
  let fixture: ComponentFixture<MainObdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainObdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainObdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
