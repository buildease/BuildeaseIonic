import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstructionlistPage } from './constructionlist.page';

const routes: Routes = [
  {
    path: '',
    component: ConstructionlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructionlistPageRoutingModule {}
