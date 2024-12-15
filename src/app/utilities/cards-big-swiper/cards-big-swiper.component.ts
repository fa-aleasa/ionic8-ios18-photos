import { Component, Input } from '@angular/core';

import { IonicSlides, ModalController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

import { ModalBigSwiper } from './modal-big-swiper/modal-big-swiper';

@Component({
  selector: 'app-cards-big-swiper',
  templateUrl: './cards-big-swiper.component.html',
  styleUrls: ['./cards-big-swiper.component.scss'],
})
export class CardsBigSwiperComponent {
  swiperModules = [IonicSlides];

  @Input() label: string = 'label';

  constructor(private modalCtrl: ModalController) {}

  async modal() {
    const modal = await this.modalCtrl.create({
      component: ModalBigSwiper,
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
