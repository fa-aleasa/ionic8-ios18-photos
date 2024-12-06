import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsNavPage } from '../settings/settings.page';
import { SettingsService } from '../core/bootstrap/settings.service';
import { SettingsProfileComponent } from '../settings/settings-profile/settings-profile.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('inlineModal') inlineModal!: ModalController;

  appLang: string = this.settings.options.language; // === 'ar-SA' ? 'en-US' : 'ar-SA';

  constructor(
    private modalCtrl: ModalController,
    private settings: SettingsService
  ) { }

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

  async openProfileModal() {
    this.dismissSettingsModal();
    setTimeout(async () => {
      const modal = await this.modalCtrl.create({
        component: SettingsProfileComponent,
      });
      modal.present();

      const { data, role } = await modal.onWillDismiss();

      if (role === 'confirm') {
        // this.message = `Hello, ${data}!`;
      }
    }, 300);
  }

  dismissSettingsModal() {
    this.inlineModal.dismiss();
  }

  changeLang() {
    this.settings.changeLanguage();
    window.location.reload();
  }

  logout(){
    this.dismissSettingsModal();

  }
}
