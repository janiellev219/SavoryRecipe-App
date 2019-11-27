import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgiumPage } from './belgium.page';

describe('BelgiumPage', () => {
  let component: BelgiumPage;
  let fixture: ComponentFixture<BelgiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelgiumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelgiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
