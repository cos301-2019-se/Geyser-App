import { Injectable } from '@angular/core';

export interface BarcodeType {
  barcode: string;
  type: string;
}

export interface GeyserImages {
  type: string;
  identifier: string;
  caseID: string;
  geyser: any;
  pressureControlValve: any;
  vacuumBreaker: any;
  dripTray: any;
  safety: any;
}

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  barcode: BarcodeType;
  pictures: GeyserImages;

  constructor() {}

  setPicturesData(data: GeyserImages) {
    this.pictures = data;
  }

  getPicturesData(): GeyserImages {
    return this.pictures;
  }
}
