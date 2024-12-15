import { Component, Input } from '@angular/core';

import { IonicSlides, ModalController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

import { ModalSmallSwiper } from './modal-small-swiper/modal-small-swiper';

@Component({
  selector: 'app-cards-small-swiper',
  templateUrl: './cards-small-swiper.component.html',
  styleUrls: ['./cards-small-swiper.component.scss'],
})
export class CardsSmallSwiperComponent {
  swiperModules = [IonicSlides];

  @Input() label: string = 'label';

  constructor(private modalCtrl: ModalController) {}

  async modal() {
    const modal = await this.modalCtrl.create({
      component: ModalSmallSwiper,
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
