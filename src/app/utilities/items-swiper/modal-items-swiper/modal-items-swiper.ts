import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-items-swiper',
  templateUrl: './modal-items-swiper.html',
  styleUrls: ['./modal-items-swiper.scss'],
})
export class ModalItemsSwiper {
  @Input() content = {
    label: 'items',
    items: [
      {
        icon: 'list',
        color: 'danger',
        name: 'list',
        detail: false,
        note: '2',
        modalName:'SettingsHome'
      }
    ],
  };

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController) {}
}
