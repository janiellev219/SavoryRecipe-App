import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalyPage } from './italy.page';

describe('ItalyPage', () => {
  let component: ItalyPage;
  let fixture: ComponentFixture<ItalyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
