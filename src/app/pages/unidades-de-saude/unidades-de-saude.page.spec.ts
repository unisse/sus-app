import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDeSaudePage } from './unidades-de-saude.page';

describe('UnidadesDeSaudePage', () => {
  let component: UnidadesDeSaudePage;
  let fixture: ComponentFixture<UnidadesDeSaudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesDeSaudePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesDeSaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
