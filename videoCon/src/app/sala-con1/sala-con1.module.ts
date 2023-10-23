import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaCon1PageRoutingModule } from './sala-con1-routing.module';

import { SalaCon1Page } from './sala-con1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaCon1PageRoutingModule
  ],
  declarations: [SalaCon1Page]
})
export class SalaCon1PageModule {}
