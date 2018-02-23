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
import {LoggedInPage} from "../pages/logged-in/logged-in";


export const firebaseAuth = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC1542p-k5rGtHpSsCqZHiXaWrtdmaEOpU',
    authDomain: 'test-ionic-app-a52a6.firebaseapp.com',
    databaseURL: 'https://test-ionic-app-a52a6.firebaseio.com',
    projectId: 'test-ionic-app-a52a6',
    storageBucket: '',
    // messagingSenderId: 'sdfg'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    LoggedInPage
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
    LoginPage,
    LoggedInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
