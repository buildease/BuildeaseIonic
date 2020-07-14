import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteriorformPageRoutingModule } from './interiorform-routing.module';

import { InteriorformPage } from './interiorform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteriorformPageRoutingModule
  ],
  declarations: [InteriorformPage]
})
export class InteriorformPageModule {}
