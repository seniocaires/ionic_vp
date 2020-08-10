import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SobrePage } from '../pages/sobre/sobre';
import { TutoriaisPage } from '../pages/tutoriais/tutoriais';
import { ProductsHttpProvider } from '../providers/products-http/products-http';
import { ProductsListPage } from '../pages/products-list/products-list';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SobrePage,
    TutoriaisPage,
    ProductsListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SobrePage,
    TutoriaisPage,
    ProductsListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductsHttpProvider
  ]
})
export class AppModule { }
