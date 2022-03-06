import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpropbindingComponent } from './eventpropbinding.component';

describe('EventpropbindingComponent', () => {
  let component: EventpropbindingComponent;
  let fixture: ComponentFixture<EventpropbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventpropbindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventpropbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
