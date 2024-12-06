import { Component, OnInit } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';

import { ProfileComponent } from '../settings-profile/settings-profile.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.scss'],
})
export class SettingsHomeComponent  implements OnInit {

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(
    public translate: TranslateService,
    private nav: IonNav,
    private modalCtrl: ModalController
  ) {}

  navigateToPageTwo() {
    this.nav.push(ProfileComponent);
  }

  ngOnInit() {}

}
