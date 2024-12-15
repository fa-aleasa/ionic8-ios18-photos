import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-more-info',
  templateUrl: './modal-more-info.html',
  styleUrls: ['./modal-more-info.scss'],
})
export class ModalMoreInfo {

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController,) { }
}
