import { Component, Input } from '@angular/core';

import { IonicSlides, ModalController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

import { ModalTinySwiper } from './modal-tiny-swiper/modal-tiny-swiper';

@Component({
  selector: 'app-cards-tiny-swiper',
  templateUrl: './cards-tiny-swiper.component.html',
  styleUrls: ['./cards-tiny-swiper.component.scss'],
})
export class CardsTinySwiperComponent {
  swiperModules = [IonicSlides];

  @Input() label: string = 'label';

  constructor(private modalCtrl: ModalController) {}

  async modal() {
    const modal = await this.modalCtrl.create({
      component: ModalTinySwiper,
      componentProps: { title: this.label },
      presentingElement: document.getElementById('main-content')!,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
}
