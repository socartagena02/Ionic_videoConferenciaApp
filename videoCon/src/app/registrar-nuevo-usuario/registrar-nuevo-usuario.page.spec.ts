import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarNuevoUsuarioPage } from './registrar-nuevo-usuario.page';

describe('RegistrarNuevoUsuarioPage', () => {
  let component: RegistrarNuevoUsuarioPage;
  let fixture: ComponentFixture<RegistrarNuevoUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarNuevoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
