import { Component, OnInit } from '@angular/core';
import { ModalController, IonNav, Platform } from '@ionic/angular';

@Component({
  selector: 'settings-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(
    private nav: IonNav,
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

  ngOnInit() {}

}
