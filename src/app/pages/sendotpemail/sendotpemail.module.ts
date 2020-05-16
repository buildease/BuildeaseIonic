import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendotpemailPageRoutingModule } from './sendotpemail-routing.module';

import { SendotpemailPage } from './sendotpemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendotpemailPageRoutingModule
  ],
  declarations: [SendotpemailPage]
})
export class SendotpemailPageModule {}
