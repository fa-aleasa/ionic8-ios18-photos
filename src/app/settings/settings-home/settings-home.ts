import { Component } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';

import { SettingsProfile } from '../settings-profile/settings-profile';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'settings-home',
  templateUrl: './settings-home.html',
  styleUrls: ['./settings-home.scss'],
})
export class SettingsHome {

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(
    public translate: TranslateService,
    private nav: IonNav,
    private modalCtrl: ModalController
  ) {}

  navigateToProfile() {
    this.nav.push(SettingsProfile,{isStandalone: false, back: 'settings'});
  }

}
