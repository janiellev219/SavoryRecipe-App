import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaPage } from './usa.page';

describe('UsaPage', () => {
  let component: UsaPage;
  let fixture: ComponentFixture<UsaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
