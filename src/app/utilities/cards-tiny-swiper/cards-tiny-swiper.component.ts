import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { IonicSlides, IonModal } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-cards-tiny-swiper',
  templateUrl: './cards-tiny-swiper.component.html',
  styleUrls: ['./cards-tiny-swiper.component.scss'],
})
export class CardsTinySwiperComponent implements OnInit {
  swiperModules = [IonicSlides];

  presentingElement: any = null;
  @ViewChild(IonModal) modal!: IonModal;

  //-------------------------------------------------------------------------------
  // BASICS DATA
  @Input() props = {};
  @Input() content = {
    label: 'label',
    items: [
      {
        background: '',
        color: 'primary',
        title: 'Card Title',
        icon: 'navigate-circle',
        img: '',
        button: {
          routerLink: ['/home'],
          queryParams: { modal: 'MoreInfo', present: 'false' },
        },
      },
    ],
  };
  //-------------------------------------------------------------------------------

  constructor() {}

  ngOnInit() {
    this.presentingElement = document.getElementById('main-content');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log(`Hello, ${ev.detail.data}!`);
    }
  }
}
