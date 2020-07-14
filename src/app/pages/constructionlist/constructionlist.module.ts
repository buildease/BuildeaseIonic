import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ConstructionlistPageRoutingModule } from './constructionlist-routing.module';
import { ConstructionlistPage } from './constructionlist.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstructionlistPageRoutingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [ConstructionlistPage]
})
export class ConstructionlistPageModule {}
