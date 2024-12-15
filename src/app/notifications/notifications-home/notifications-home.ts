import { Component } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';

import { NotificationPage } from '../notification-page/notification-page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'notifications-home',
  templateUrl: './notifications-home.html',
  styleUrls: ['./notifications-home.scss'],
})
export class NotificationsHome {

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(
    public translate: TranslateService,
    private nav: IonNav,
    private modalCtrl: ModalController
  ) {}

  navigateToPage() {
    this.nav.push(NotificationPage,{back: 'back'});
  }
}
