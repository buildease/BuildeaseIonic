import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendotpemailPage } from './sendotpemail.page';

const routes: Routes = [
  {
    path: '',
    component: SendotpemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendotpemailPageRoutingModule {}
