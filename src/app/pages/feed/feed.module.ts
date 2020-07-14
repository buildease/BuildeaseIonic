import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedPageRoutingModule } from './feed-routing.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { FeedPage } from './feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [FeedPage]
})
export class FeedPageModule {}
