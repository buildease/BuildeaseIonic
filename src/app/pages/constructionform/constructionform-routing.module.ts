import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstructionformPage } from './constructionform.page';

const routes: Routes = [
  {
    path: '',
    component: ConstructionformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructionformPageRoutingModule {}
