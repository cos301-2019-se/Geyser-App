import { Injectable } from '@angular/core';

export interface BarcodeType {
  barcode: string;
  type: string;
}

export interface GeyserImages {
  geyser: any;
  pressureControlValve: any;
  vacuumBreaker: any;
  dripTray: any;
  safety: any;
}

export interface Details {
  capacity: string;
  model: string;
  manufacturer: string;
  name: string;
  surname: string;
  phone: string;
  address: string;
  insurance: string;
  imagePath: string;
}

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private barcode: BarcodeType;
  pictures: GeyserImages;

  constructor() { }

  setBarcode(data: BarcodeType) {
    this.barcode = data;
  }

  getBarcode() {
    return this.barcode;
  }

  setPicturesData(data: GeyserImages) {
    this.pictures = data;
  }

  getPicturesData(): GeyserImages{
    return this.pictures;
  }
}
