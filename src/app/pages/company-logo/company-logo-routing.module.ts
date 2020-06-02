import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyLogoPage } from './company-logo.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyLogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyLogoPageRoutingModule {}
