import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteriordesignlistPage } from './interiordesignlist.page';

const routes: Routes = [
  {
    path: '',
    component: InteriordesignlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteriordesignlistPageRoutingModule {}
