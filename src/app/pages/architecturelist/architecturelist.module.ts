import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArchitecturelistPageRoutingModule } from './architecturelist-routing.module';
import { ArchitecturelistPage } from './architecturelist.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchitecturelistPageRoutingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [ArchitecturelistPage]
})
export class ArchitecturelistPageModule {}
