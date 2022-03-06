import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatelinkComponent } from './templatelink.component';

describe('TemplatelinkComponent', () => {
  let component: TemplatelinkComponent;
  let fixture: ComponentFixture<TemplatelinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatelinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
