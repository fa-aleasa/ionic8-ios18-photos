import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  name: string | undefined;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
