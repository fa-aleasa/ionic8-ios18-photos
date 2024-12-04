import { Component, OnInit } from '@angular/core';

import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-items-swiper',
  templateUrl: './items-swiper.component.html',
  styleUrls: ['./items-swiper.component.scss'],
})
export class ItemsSwiperComponent  implements OnInit {

  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {}

}
