import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAmigosPage } from './lista-amigos.page';

describe('ListaAmigosPage', () => {
  let component: ListaAmigosPage;
  let fixture: ComponentFixture<ListaAmigosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaAmigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
