import { Component, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { SettingsNavPage } from '../settings/settings.page';
import { SettingsService } from '../core/bootstrap/settings.service';
import { SettingsProfileComponent } from '../settings/settings-profile/settings-profile.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('sheetModal') inlineModal!: ModalController;

  appLang: string =
    this.settings.options.language === 'en-US' ? 'en-US' : 'ar-SA';

  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private settings: SettingsService,
    public translate: TranslateService
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

  handleLangChange(e: any) {
    if (e.detail.value !== this.appLang) {
      this.settings.changeLanguage();
      window.location.reload();
    } else {
      window.location.reload();
    }
  }

  async logout() {
    let okText = this.translate.instant('logout');
    let cancelText = this.translate.instant('cancel');
    let headerText = this.translate.instant('logoutAlertHeader');

    const alert = await this.alertController.create({
      header: headerText,
      // subHeader: 'A Sub Header Is Optional',
      // message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: cancelText,
          role: 'cancel',
          handler: () => {
            // console.log('Alert canceled');
          },
        },
        {
          text: okText,
          role: 'confirm',
          handler: () => {
            this.dismissSettingsModal();
          },
          cssClass: 'red-text',
        },
      ],
    });
    await alert.present();
  }
}
