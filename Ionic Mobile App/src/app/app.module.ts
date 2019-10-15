// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// main app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// HTTP
import { HTTP } from '@ionic-native/http/ngx';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { HttpBackend, HttpXhrBackend, HttpClientModule } from '@angular/common/http';
import { Platform } from '@ionic/angular';

// services
import { AuthenticationService } from './services/authentication.service';
import { DatabaseService } from './services/database.service';
import { MemoryService } from './services/memory.service';

// camera
import { Camera } from '@ionic-native/camera/ngx';

// barecode
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    NativeHttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    AuthenticationService,
    DatabaseService,
    MemoryService,
    Camera,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
