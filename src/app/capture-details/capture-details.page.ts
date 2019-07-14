import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MemoryService, Details, BarcodeType, GeyserImages } from '../services/memory.service';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capture-details',
  templateUrl: './capture-details.page.html',
  styleUrls: ['./capture-details.page.scss'],
})
export class CaptureDetailsPage implements OnInit {

  validationForm: FormGroup;
  errorMessage = ''; //

  validationMessages = {
    capacity: [{ type: 'required', message: 'capacity is required.'}],
    model: [{ type: 'required', message: 'model is required.' }],
    manufacturer: [{ type: 'required', message: 'manufacturer is required.' }],
    insurance: [{ type: 'required', message: 'insurance is required.' }]
  };

  constructor(
    private formBuilder: FormBuilder,
    private memory: MemoryService,
    private database: DatabaseService,
    private router: Router
    ) { }

  ngOnInit() {
    this.validationForm = this.formBuilder.group({
      capacity: new FormControl('', Validators.compose([
        Validators.required
      ])),
      model: new FormControl('', Validators.compose([
        Validators.required
      ])),
      manufacturer: new FormControl('', Validators.compose([
        Validators.required
      ])),
      insurance: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  submitData(value: any) {
    const path = this.memory.getBarcode().barcode;

    const details: Details = {
      barcode : value.barcode,
      capacity : value.capacity,
      model : value.model,
      manufacturer : value.manufacturer,
      insurance : value.insurance,
    };

    this.database.createDocument(this.memory.getBarcode().barcode, details).then((val) => {
      console.log(val);
    });

    let num = 0;
    const str = path + '_' + num++ + '.jpg';
    this.database.upload(path + '_' + num++ + '.jpg', this.memory.pictures.geyser);
    this.database.upload(path + '_' + num++ + '.jpg', this.memory.pictures.pressureControlValve);
    this.database.upload(path + '_' + num++ + '.jpg', this.memory.pictures.vacuumBreaker);
    this.database.upload(path + '_' + num++ + '.jpg', this.memory.pictures.dripTray);
    this.database.upload(path + '_' + num++ + '.jpg', this.memory.pictures.safety);
    this.router.navigate(['complete']);
  }
}
