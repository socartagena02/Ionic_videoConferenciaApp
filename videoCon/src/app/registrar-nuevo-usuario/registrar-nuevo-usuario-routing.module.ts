import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarNuevoUsuarioPage } from './registrar-nuevo-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarNuevoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarNuevoUsuarioPageRoutingModule {}
