import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { IonicSlides, IonModal } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-cards-big-swiper',
  templateUrl: './cards-big-swiper.component.html',
  styleUrls: ['./cards-big-swiper.component.scss'],
})
export class CardsBigSwiperComponent implements OnInit {
  swiperModules = [IonicSlides];

  presentingElement: any = null;
  @ViewChild(IonModal) modal!: IonModal;
  @Input() label: string = 'label';

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
