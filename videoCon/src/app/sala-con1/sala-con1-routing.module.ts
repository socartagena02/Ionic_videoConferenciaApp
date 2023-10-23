import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaCon1Page } from './sala-con1.page';

const routes: Routes = [
  {
    path: '',
    component: SalaCon1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaCon1PageRoutingModule {}
