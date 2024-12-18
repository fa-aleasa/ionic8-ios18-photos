import { Component, Input } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';

import { SettingsProfile } from '../settings-profile/settings-profile';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'settings-home',
  templateUrl: './settings-home.html',
  styleUrls: ['./settings-home.scss'],
})
export class SettingsHome {
  @Input() isPresenting: boolean = false;

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private nav: IonNav, private modalCtrl: ModalController) {}

  navigateTo() {
    this.nav.push(SettingsProfile, { isStandalone: false, isPresenting: this.isPresenting });
  }
}
