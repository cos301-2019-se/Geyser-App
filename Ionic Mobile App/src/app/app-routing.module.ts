import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './barcode-scanner/barcode-scanner.module#BarcodeScannerPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'barcode-scanner', loadChildren: './barcode-scanner/barcode-scanner.module#BarcodeScannerPageModule' },
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'capture-details', loadChildren: './capture-details/capture-details.module#CaptureDetailsPageModule' },
  { path: 'complete', loadChildren: './complete/complete.module#CompletePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
