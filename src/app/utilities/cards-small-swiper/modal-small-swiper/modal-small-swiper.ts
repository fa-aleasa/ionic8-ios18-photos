import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-small-swiper',
  templateUrl: './modal-small-swiper.html',
  styleUrls: ['./modal-small-swiper.scss'],
})
export class ModalSmallSwiper {

  @Input() title: string = 'title';

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController,) { }
}
