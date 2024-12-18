import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'notifications-page',
  templateUrl: './notification-page.html',
  styleUrls: ['./notification-page.scss'],
})
export class NotificationPage {
  @Input() isPresenting: boolean = false;

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController) {}
}
