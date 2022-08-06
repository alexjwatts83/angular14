/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UntypedFormComponent } from './untyped-form.component';

describe('UntypedFormComponent', () => {
  let component: UntypedFormComponent;
  let fixture: ComponentFixture<UntypedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntypedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntypedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
