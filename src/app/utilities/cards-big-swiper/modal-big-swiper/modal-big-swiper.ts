import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-big-swiper',
  templateUrl: './modal-big-swiper.html',
  styleUrls: ['./modal-big-swiper.scss'],
})
export class ModalBigSwiper {

  @Input() title: string = 'title';

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController,) { }
}
