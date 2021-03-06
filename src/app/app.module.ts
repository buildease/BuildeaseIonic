import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfigService } from './services/config.service';
import { CacheService } from './services/cache.service';
import { DataService } from './services/data.service';
import { GetListService } from './services/get-list.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
// import { PhotoViewer } from '@ionic-native/photo-viewer';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    NgxIonicImageViewerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConfigService,
    CacheService,
    AuthGuardService,
    DataService,
    GetListService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // PhotoViewer,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
