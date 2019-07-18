import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MemoryService, Details, BarcodeType, GeyserImages } from '../services/memory.service';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-capture-details',
  templateUrl: './capture-details.page.html',
  styleUrls: ['./capture-details.page.scss'],
})
export class CaptureDetailsPage implements OnInit {

  validationForm: FormGroup;
  errorMessage = ''; //

  validationMessages = {
    model: [{ type: 'required', message: 'model is required.' }],
    manufacturer: [{ type: 'required', message: 'manufacturer is required.' }],
    insurance: [{ type: 'required', message: 'insurance is required.' }]
  };

  constructor(
    private formBuilder: FormBuilder,
    private memory: MemoryService,
    private database: DatabaseService,
    private router: Router,
    private auth: AuthenticationService
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
    const path = this.auth.currentUser.caseID;
    const details: Details = {
      barcode : this.memory.getBarcode().barcode,
      capacity : value.capacity,
      model : value.model,
      manufacturer : value.manufacturer,
      insurance : value.insurance,
      caseID : this.auth.currentUser.caseID
    };
    this.database.createDocument(this.memory.getBarcode().barcode + '-' + path, details);
    let num = 0;
    this.database.upload(path, num++ + '.jpg', this.memory.pictures.geyser);
    this.database.upload(path, num++ + '.jpg', this.memory.pictures.pressureControlValve);
    this.database.upload(path, num++ + '.jpg', this.memory.pictures.vacuumBreaker);
    this.database.upload(path, num++ + '.jpg', this.memory.pictures.dripTray);
    this.database.upload(path, num++ + '.jpg', this.memory.pictures.safety);
    alert('files uploaded');
    this.database.setCaseStatusComplete(details.caseID, this.auth.currentUser.userID);
    this.router.navigate(['complete']);
  }
}
