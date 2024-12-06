import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsNavPage } from '../settings/settings.page';
import { SettingsService } from '../core/bootstrap/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  appLang : string = this.settings.options.language// === 'ar-SA' ? 'en-US' : 'ar-SA';

  constructor(
    private modalCtrl: ModalController,
    private settings: SettingsService
  ) {}

  async openSettingsModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsNavPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

  changeLang() {
    this.settings.changeLanguage();
    window.location.reload();
  }
}
