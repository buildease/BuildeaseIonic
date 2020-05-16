import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'',
        loadChildren:'../pages/feed/feed.module#FeedPageModule'
      },
      {
        path:'feed',
        loadChildren:'../pages/feed/feed.module#FeedPageModule'
      },
      {
        path:'notifications',
        loadChildren:'../pages/notifications/notifications.module#NotificationsPageModule'
      },
      {
        path:'messages',
        loadChildren:'../pages/messages/messages.module#MessagesPageModule'
      },
      {
        path:'settings',
        loadChildren:'../pages/settings/settings.module#SettingsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
