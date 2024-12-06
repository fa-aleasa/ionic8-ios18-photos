import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonNav, Platform } from '@ionic/angular';

@Component({
  selector: 'settings-profile',
  templateUrl: './settings-profile.component.html',
  styleUrls: ['./settings-profile.component.scss'],
})
export class SettingsProfileComponent  implements OnInit {
  @Input() isStandalone: boolean = true;
  @Input() back: string = 'back';

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {}

}
