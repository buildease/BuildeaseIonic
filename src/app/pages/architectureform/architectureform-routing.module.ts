import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchitectureformPage } from './architectureform.page';

const routes: Routes = [
  {
    path: '',
    component: ArchitectureformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchitectureformPageRoutingModule {}
