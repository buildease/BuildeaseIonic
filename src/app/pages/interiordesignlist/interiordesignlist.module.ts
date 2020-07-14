import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { InteriordesignlistPageRoutingModule } from './interiordesignlist-routing.module';
import { InteriordesignlistPage } from './interiordesignlist.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteriordesignlistPageRoutingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [InteriordesignlistPage]
})
export class InteriordesignlistPageModule {}
