import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancePage } from './france.page';

describe('FrancePage', () => {
  let component: FrancePage;
  let fixture: ComponentFixture<FrancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
