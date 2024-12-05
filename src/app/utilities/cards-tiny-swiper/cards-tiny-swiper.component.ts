import { Component, OnInit } from '@angular/core';

import { IonicSlides } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-cards-tiny-swiper',
  templateUrl: './cards-tiny-swiper.component.html',
  styleUrls: ['./cards-tiny-swiper.component.scss'],
})
export class CardsTinySwiperComponent implements OnInit {
  swiperModules = [IonicSlides];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  lang() {
    if (document.documentElement.lang === 'en-US') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar-SA';
      this.translate.setDefaultLang('ar-SA');
      this.translate.use('ar-SA');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en-US';
      this.translate.setDefaultLang('en-US');
      this.translate.use('en-US');
    }
  }
}
