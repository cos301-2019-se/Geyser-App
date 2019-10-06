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

// environment
import { environment } from 'src/environments/environment';

// firebase
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorage, StorageBucket } from '@angular/fire/storage';

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
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationService,
    DatabaseService,
    AngularFireStorage,
    MemoryService,
    Camera,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: StorageBucket, useValue: 'gs://geyser-74ddf.appspot.com/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
