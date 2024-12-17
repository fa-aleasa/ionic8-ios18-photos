import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { IonicSlides, IonModal } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-cards-small-swiper',
  templateUrl: './cards-small-swiper.component.html',
  styleUrls: ['./cards-small-swiper.component.scss'],
})
export class CardsSmallSwiperComponent implements OnInit {
  swiperModules = [IonicSlides];

  presentingElement: any = null;
  @ViewChild(IonModal) modal!: IonModal;

  //-------------------------------------------------------------------------------
  // BASICS DATA
  cardStyle = 'height: 160px;';
  @Input() props = {
    height: 160,
  };
  @Input() content = {
    label: 'label',
    items: [
      {
        background: '',
        color: 'primary',
        title: 'Card Title',
        subtitle: 'Card Subtitle',
        icon: 'navigate-circle',
        img: '',
        button: {
          routerLink: ['/home'],
          queryParams: { modal: 'MoreInfo', present: 'false' },
        },
      },
      {
        background: 'url(assets/images/01.jpg)',
        color: '',
        title: 'Card Title',
        subtitle: 'Card Subtitle',
        icon: '',
        img: '',
        button: {
          routerLink: ['/home'],
          queryParams: { modal: 'MoreInfo', present: 'false' },
        },
      },
    ],
  };
  //-------------------------------------------------------------------------------

  ngOnInit() {
    this.cardStyle = 'height: ' + this.props.height + 'px;';
    this.presentingElement = document.getElementById('main-content');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log(`Hello, ${ev.detail.data}!`);
    }
  }
}
