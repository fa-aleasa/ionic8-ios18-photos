import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonNav, ModalController, Platform } from '@ionic/angular';

import { ModalMoreInfo } from './utilities/modal-more-info/modal-more-info';
import { SettingsHome } from './settings/settings-home/settings-home';
import { NotificationsHome } from './notifications/notifications-home/notifications-home';
import { SettingsProfile } from './settings/settings-profile/settings-profile';

@Component({
  selector: 'app-settings',
  template: ` <ion-nav [root]="component" #appModal></ion-nav> `,
})
export class AppModal implements OnInit {
  @ViewChild('appModal') private nav!: IonNav;

  component: any;
  @Input() componentName: string = '';

  constructor(private modalCtrl: ModalController, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(101, async () => {
      let canGoBack = await this.nav.canGoBack();
      if (canGoBack) {
        this.nav.pop();
      } else {
        await this.modalCtrl.dismiss();
      }
      return;
    });
  }

  ngOnInit() {
    switch (this.componentName) {
      case 'MoreInfo':
        this.component = ModalMoreInfo;
        break;
      case 'NotificationsHome':
        this.component = NotificationsHome;
        break;
      case 'SettingsHome':
        this.component = SettingsHome;
        break;
      case 'SettingsProfile':
        this.component = SettingsProfile;
        break;
      // default:
      //   this.component = NotificationsHome;
    }
  }
}
