import { Component, OnInit } from '@angular/core';

import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-cards-small-swiper',
  templateUrl: './cards-small-swiper.component.html',
  styleUrls: ['./cards-small-swiper.component.scss'],
})
export class CardsSmallSwiperComponent  implements OnInit {

  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {}

}
