import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { AppModal } from '../app.modal';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CoverFullSwiperComponent } from '../utilities/cover-full-swiper/cover-full-swiper.component';

import { CardsBigSwiperComponent } from '../utilities/cards-big-swiper/cards-big-swiper.component';
import { CardsSmallSwiperComponent } from '../utilities/cards-small-swiper/cards-small-swiper.component';
import { CardsTinySwiperComponent } from '../utilities/cards-tiny-swiper/cards-tiny-swiper.component';
import { ItemsSwiperComponent } from '../utilities/items-swiper/items-swiper.component';
import { ModalMoreInfo } from '../utilities/modal-more-info/modal-more-info';

import { NotificationsHome } from '../notifications/notifications-home/notifications-home';
import { NotificationPage } from '../notifications/notification-page/notification-page';

import { SettingsHome } from '../settings/settings-home/settings-home';
import { SettingsProfile } from '../settings/settings-profile/settings-profile';


@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    AppModal,

    CoverFullSwiperComponent,

    CardsBigSwiperComponent,
    CardsSmallSwiperComponent,
    CardsTinySwiperComponent,
    ItemsSwiperComponent,
    ModalMoreInfo,

    NotificationsHome,
    NotificationPage,

    SettingsHome,
    SettingsProfile,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
