/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnPushedComponent } from './on-pushed.component';

describe('OnPushedComponent', () => {
  let component: OnPushedComponent;
  let fixture: ComponentFixture<OnPushedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
