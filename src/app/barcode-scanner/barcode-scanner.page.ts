import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { MemoryService, BarcodeType } from '../services/memory.service';




@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage implements OnInit {
  hasScannedData = false;
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner, private router: Router, private memory: MemoryService) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  scanCode() {
    const bar: BarcodeType = {
      barcode: '',
      type: '',
    };

    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        bar.barcode = barcodeData.text;
        bar.type = barcodeData.format;
        this.memory.setBarcode(bar);
        this.hasScannedData = true;
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['dashboard']);
  }

  goNext() {
    this.hasScannedData = false;
    this.router.navigate(['camera']);
  }

}
