import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyLogoPageRoutingModule } from './company-logo-routing.module';

import { CompanyLogoPage } from './company-logo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyLogoPageRoutingModule
  ],
  declarations: [CompanyLogoPage]
})
export class CompanyLogoPageModule {}
