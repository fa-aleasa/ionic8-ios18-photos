import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'settings-profile',
  templateUrl: './settings-profile.html',
  styleUrls: ['./settings-profile.scss'],
})
export class SettingsProfile {
  @Input() isPresenting: boolean = false;
  @Input() isStandalone: boolean = true;

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController) {}
}
