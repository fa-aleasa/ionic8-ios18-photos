import { Component, ViewChild } from '@angular/core';
import { IonNav } from '@ionic/angular';
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
  onWillPresent() {
    this.nav.setRoot(SettingsHomeComponent);
  }
}
