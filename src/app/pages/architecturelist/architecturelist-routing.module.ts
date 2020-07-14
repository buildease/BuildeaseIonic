import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchitecturelistPage } from './architecturelist.page';

const routes: Routes = [
  {
    path: '',
    component: ArchitecturelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchitecturelistPageRoutingModule {}
