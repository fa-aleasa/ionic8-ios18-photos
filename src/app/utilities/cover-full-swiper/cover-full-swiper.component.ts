import { Component, OnInit } from '@angular/core';

import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-cover-full-swiper',
  templateUrl: './cover-full-swiper.component.html',
  styleUrls: ['./cover-full-swiper.component.scss'],
})
export class CoverFullSwiperComponent  implements OnInit {

  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {}

}
