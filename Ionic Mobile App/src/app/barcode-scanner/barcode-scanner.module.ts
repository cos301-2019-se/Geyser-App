import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BarcodeScannerPage } from './barcode-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodeScannerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BarcodeScannerPage]
})
export class BarcodeScannerPageModule {}
