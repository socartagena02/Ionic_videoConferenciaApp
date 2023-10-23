import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarNuevoUsuarioPageRoutingModule } from './registrar-nuevo-usuario-routing.module';

import { RegistrarNuevoUsuarioPage } from './registrar-nuevo-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarNuevoUsuarioPageRoutingModule
  ],
  declarations: [RegistrarNuevoUsuarioPage]
})
export class RegistrarNuevoUsuarioPageModule {}
