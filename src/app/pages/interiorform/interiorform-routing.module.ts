import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteriorformPage } from './interiorform.page';

const routes: Routes = [
  {
    path: '',
    component: InteriorformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteriorformPageRoutingModule {}
