import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ZoomAreaModule } from 'ionic2-zoom-area';
import { HomePage } from '../pages/home/home';
import { DirectivesModule } from './../directives/directives.module';
import { ScalePage } from './../pages/scale/scale';
import { SelectPage } from './../pages/select/select';
import { Zoom1Page } from './../pages/zoom1/zoom1';
import { Zoom2PinchPage } from './../pages/zoom2-pinch/zoom2-pinch';
import { MyApp } from './app.component';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Zoom1Page,
    ScalePage,
    Zoom2PinchPage,
    SelectPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ZoomAreaModule.forRoot(),
    IonicModule.forRoot(MyApp),
    DirectivesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Zoom1Page,
    ScalePage,
    Zoom2PinchPage,
    SelectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}


