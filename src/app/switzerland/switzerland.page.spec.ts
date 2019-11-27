import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitzerlandPage } from './switzerland.page';

describe('SwitzerlandPage', () => {
  let component: SwitzerlandPage;
  let fixture: ComponentFixture<SwitzerlandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitzerlandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitzerlandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
