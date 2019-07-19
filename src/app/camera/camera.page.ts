import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { MemoryService, GeyserImages } from '../services/memory.service';

const MAX_IMAGES = (5);

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  hasTakenImage = false;
  readyToTakePicture = true;
  nextImageString: string[] = [
    'Please take a photo of the geyser',
    'Please take a photo of the pressure control valve',
    'Please take a photo of the vacuum breakers',
    'Please take a photo of the driptray',
    'Please take a photo of the safety'
  ];
  imageIndex = 0;
  displayInstruction = '';
  image: any = '';
  imageData: any = '';
  pictures: GeyserImages = {
    geyser : '',
    pressureControlValve : '',
    vacuumBreaker : '',
    dripTray : '',
    safety : ''
  };

  constructor(private camera: Camera, private router: Router, private memory: MemoryService) {
    this.displayInstruction = this.nextImageString[this.imageIndex];
  }

  openCam() {

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData; // (window as any).Ionic.WebView.convertFileSrc(imageData);
      this.imageData = 'data:image/jpeg;base64,' + imageData;
      this.hasTakenImage = true;
    }, (err) => {
     alert('error ' + JSON.stringify(err));
    });

  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['barcode-scanner']);
  }

  nextImage() {
    switch (this.imageIndex) {
      case 0: { this.pictures.geyser = this.imageData; break; }
      case 1: { this.pictures.pressureControlValve = this.imageData; break; }
      case 2: { this.pictures.vacuumBreaker = this.imageData; break; }
      case 3: { this.pictures.dripTray = this.imageData; break; }
      case 4: { this.pictures.safety = this.imageData; break; }
    }

    this.memory.pictures = this.pictures;

    if (++this.imageIndex < MAX_IMAGES) {
      this.displayInstruction = this.nextImageString[this.imageIndex];
    }

    this.image = '';
    this.imageData = '';
    this.hasTakenImage = false;

    if (this.imageIndex === MAX_IMAGES) {
      this.router.navigate(['capture-details']);
    }
  }
}
