import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchitectureformPageRoutingModule } from './architectureform-routing.module';

import { ArchitectureformPage } from './architectureform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchitectureformPageRoutingModule
  ],
  declarations: [ArchitectureformPage]
})
export class ArchitectureformPageModule {}
