import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-more-info',
  templateUrl: './modal-more-info.html',
  styleUrls: ['./modal-more-info.scss'],
})
export class ModalMoreInfo {

  @Input() content = {
    label: '',
    items: [
      {
        title: 'Card Title',
        BodyStart: 'Heres a small text description for the card content. Nothing more, nothing less.',
        img: 'assets/images/01.jpg',
        BodyEnd: 'Heres a small text description for the card content. Nothing more, nothing less.',
      },
    ],
  };

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController) {}
}
