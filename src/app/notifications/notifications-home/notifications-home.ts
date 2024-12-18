import { Component, Input } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';

import { NotificationPage } from '../notification-page/notification-page';

@Component({
  selector: 'notifications-home',
  templateUrl: './notifications-home.html',
  styleUrls: ['./notifications-home.scss'],
})
export class NotificationsHome {
  @Input() isPresenting: boolean = false;

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private nav: IonNav, private modalCtrl: ModalController) {}

  navigateTo() {
    this.nav.push(NotificationPage, { isPresenting: this.isPresenting });
  }
}
