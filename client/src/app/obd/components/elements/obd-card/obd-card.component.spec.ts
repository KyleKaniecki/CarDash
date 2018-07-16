import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObdCardComponent } from './obd-card.component';

describe('ObdCardComponent', () => {
  let component: ObdCardComponent;
  let fixture: ComponentFixture<ObdCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObdCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
