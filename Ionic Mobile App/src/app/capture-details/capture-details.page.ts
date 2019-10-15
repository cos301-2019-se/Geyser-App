import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MemoryService } from '../services/memory.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export interface Details {
  type: string
  identifier: string;
  barcode: string;
  cap: string;
  mod: string;
  manu: string;
  insure: string;
  caseid: string;
  geyserTemp: number;
}

export interface caseDetails {
  type: string
  identifier: string;
  id: string;
  param: string;
  newVal: string;
}

export interface userDetails {
  type: string
  identifier: string;
  user: string;
  param: string;
  newVal: string;
}

@Component({
  selector: 'app-capture-details',
  templateUrl: './capture-details.page.html',
  styleUrls: ['./capture-details.page.scss'],
})
export class CaptureDetailsPage implements OnInit {
  isGeyserAdded: boolean = false;
  isPicturesSent: boolean = false;
  isCaseChanged: boolean = false;
  isUserChanged: boolean = false;
  uploadCounter: number = 0
  validationForm: FormGroup;
  errorMessage = '';

  validationMessages = {
    model: [{ type: 'required', message: '.   Model is required.'}],
    manufacturer: [{ type: 'required', message: '.   Manufacturer is required.' }],
    insurance: [{ type: 'required', message: '.   Insurance is required.' }],
    temperature: [{ type: 'required', message: '.   Temperature is required.' }]
  };

  constructor(
    private formBuilder: FormBuilder,
    private memory: MemoryService,
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
      ])),
      temperature: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  submitData(value: any) {
    this.uploadCounter = 0;
    const details: Details = {
      type: 'addGeyser',
      identifier: this.auth.currentUser.identifier,
      barcode : this.memory.barcode.barcode,
      cap : value.capacity,
      mod : value.model,
      manu : value.manufacturer,
      insure : value.insurance,
      caseid : this.auth.currentUser.caseID,
      geyserTemp: value.temperature
    };

    const caseDetails: caseDetails = {
      type: 'updateCase',
      identifier: this.auth.currentUser.identifier,
      id: this.auth.currentUser.caseID,
      param: 'caseID',
      newVal: 'completed'
    }
    
    const userDetails: userDetails = {
      type: 'updateUser',
      identifier: this.auth.currentUser.identifier,
      user: this.auth.currentUser.userID,
      param: 'caseToWorkOn',
      newVal: 'none'
    }

    this.auth.addgeyser(details).then(successful => {
      if(successful) {
        this.isGeyserAdded = true;
        this.checkDataUploaded();
      }

    }, err => { 
      this.checkDataUploaded();
    });

    this.auth.sendImages(this.memory.pictures).then(successful => {
      if(successful) {
        this.isPicturesSent = true;
        this.checkDataUploaded();
      }

    }, err => { 
      this.checkDataUploaded();
    });
    
    this.auth.updateCase(caseDetails).then(successful => {
      if(successful) {
        this.isCaseChanged = true;
        this.checkDataUploaded();
      }

    }, err => { 
      this.checkDataUploaded();
    });

    this.auth.updateUser(userDetails).then(successful => {
      if(successful) {
        this.isUserChanged = true;
        this.checkDataUploaded();
      }

    }, err => { 
      this.checkDataUploaded();
    });
  }

  checkDataUploaded() {
    if(this.isGeyserAdded && this.isPicturesSent && this.isCaseChanged && this.isUserChanged) {
      this.router.navigate(['complete']);
    } else {
      this.errorMessage = 'Details are being uploaded please wait...';
      this.uploadCounter++;
    }

    if(this.uploadCounter == 4) {
      this.errorMessage = 'Details could not be uploaded please try again.';
    }
  }
}
