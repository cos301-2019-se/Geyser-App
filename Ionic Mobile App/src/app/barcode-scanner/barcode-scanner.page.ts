import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { MemoryService, BarcodeType } from '../services/memory.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage implements OnInit {
  hasScannedData = false;
  barcodeScannerOptions: BarcodeScannerOptions;
  enterBarcodeMode = false;
  validationsForm: FormGroup;
  errorMessage = '';

  validationMessages = {
    barcode: [
      { type: 'required', message: 'barcode is required.' }
    ]
  };

  bar: BarcodeType = {
    barcode: '',
    type: '',
  };

  constructor(
    private barcodeScanner: BarcodeScanner, 
    private router: Router, 
    private memory: MemoryService,
    private formBuilder: FormBuilder
    ) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      barcode: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  enterBarcode(value: any) {
    this.bar.barcode = value.barcode;
    this.bar.type = 'entered';
    this.memory.setBarcode(this.bar);
    this.goNext()
  }

  scanCode() {
    this.enterBarcodeMode = false;
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.bar.barcode = barcodeData.text;
        this.bar.type = barcodeData.format;
        this.memory.setBarcode(this.bar);
        this.hasScannedData = true;
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  enterCode() {
    this.enterBarcodeMode = true;
  }

  goBack() {
    this.router.navigate(['dashboard']);
  }

  goNext() {
    this.hasScannedData = false;
    this.router.navigate(['camera']);
  }

}
