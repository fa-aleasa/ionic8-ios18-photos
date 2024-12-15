import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-tiny-swiper',
  templateUrl: './modal-tiny-swiper.html',
  styleUrls: ['./modal-tiny-swiper.scss'],
})
export class ModalTinySwiper {

  @Input() title: string = 'title';

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController,) { }
}
