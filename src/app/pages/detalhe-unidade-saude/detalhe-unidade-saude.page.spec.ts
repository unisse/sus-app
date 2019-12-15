import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheUnidadeSaudePage } from './detalhe-unidade-saude.page';

describe('DetalheUnidadeSaudePage', () => {
  let component: DetalheUnidadeSaudePage;
  let fixture: ComponentFixture<DetalheUnidadeSaudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheUnidadeSaudePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheUnidadeSaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
