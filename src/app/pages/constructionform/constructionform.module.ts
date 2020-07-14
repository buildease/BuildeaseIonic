import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstructionformPageRoutingModule } from './constructionform-routing.module';

import { ConstructionformPage } from './constructionform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstructionformPageRoutingModule
  ],
  declarations: [ConstructionformPage]
})
export class ConstructionformPageModule {}
