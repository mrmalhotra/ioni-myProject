import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";
import {AngularFireModule} from "angularfire2";
import { AngularFireAuth } from 'angularfire2/auth';


export const firebaseAuth = {
  production: false,
  firebase: {
    apiKey: 'dfgs',
    authDomain: 'dfg',
    databaseURL: 'dfsg',
    projectId: 'sdfg',
    storageBucket: 'fdgs',
    messagingSenderId: 'sdfg'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth.firebase),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
