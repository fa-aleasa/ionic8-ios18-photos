import { Component, OnInit } from '@angular/core';

import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-cards-big-swiper',
  templateUrl: './cards-big-swiper.component.html',
  styleUrls: ['./cards-big-swiper.component.scss'],
})
export class CardsBigSwiperComponent  implements OnInit {

  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {}

}
