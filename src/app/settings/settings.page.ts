import { Component, ViewChild } from '@angular/core';
import { IonNav, ModalController, Platform } from '@ionic/angular';
import { SettingsHomeComponent } from './settings-home/settings-home.component';

@Component({
  selector: 'app-settings',
  template: `
  <ion-nav [root]="component" #settingNav></ion-nav>
  `,
})
export class SettingsNavPage {
  component = SettingsHomeComponent;

  @ViewChild('nav') private nav!: IonNav;

  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
  ) {
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

  onWillPresent() {
    this.nav.setRoot(SettingsHomeComponent);
  }
}
