import { Component, Input, ViewChild } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';

@Component({
  selector: 'settings-profile',
  templateUrl: './settings-profile.html',
  styleUrls: ['./settings-profile.scss'],
})
export class SettingsProfile {
  @ViewChild('settingNav') private nav!: IonNav;

  @Input() isStandalone: boolean = true;

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController,) { }
}
