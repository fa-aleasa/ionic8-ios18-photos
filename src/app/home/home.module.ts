import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CardsBigSwiperComponent } from '../utilities/cards-big-swiper/cards-big-swiper.component';
import { CoverFullSwiperComponent } from '../utilities/cover-full-swiper/cover-full-swiper.component';
import { CardsSmallSwiperComponent } from '../utilities/cards-small-swiper/cards-small-swiper.component';
import { ItemsSwiperComponent } from '../utilities/items-swiper/items-swiper.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    CardsBigSwiperComponent,
    CoverFullSwiperComponent,
    CardsSmallSwiperComponent,
    ItemsSwiperComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
