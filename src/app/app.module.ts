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
import { Zoom1Page } from './../pages/zoom1/zoom1';
import { Zoom2PinchPage } from './../pages/zoom2-pinch/zoom2-pinch';
import { MyApp } from './app.component';

// export class HammerConfigExt extends HammerGestureConfig {

//   buildHammer(element: HTMLElement) {

//     const mc = new (<any> window).Hammer(
//       element, {
//         // set the touchAction accordingly
//         touchAction: "pan-y pan-x",
//         domEvents: true
//       }
//     );

//     // enable the pinch gesture
//     mc.get('pinch').set({
//       enable: true
//     });

//     return mc;

//   }

// }

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Zoom1Page,
    ScalePage,
    Zoom2PinchPage
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
    Zoom2PinchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // {
    //   provide: HAMMER_GESTURE_CONFIG,
    //   useClass: HammerConfigExt
    // }
  ]
})
export class AppModule {}


