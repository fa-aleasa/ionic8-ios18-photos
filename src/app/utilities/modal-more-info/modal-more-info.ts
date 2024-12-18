import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-more-info',
  templateUrl: './modal-more-info.html',
  styleUrls: ['./modal-more-info.scss'],
})
export class ModalMoreInfo {
  @Input() isPresenting: boolean = false;

  @Input() params: any = { index: 0 };
  contents = [
    {
      id: 0,
      label: 'info',
      items: [],
    },
    {
      id: 1,
      label: '',
      items: [
        {
          title: 'Card Title',
          BodyStart:
            'Heres a small text description for the card content. Nothing more, nothing less.',
          img: 'assets/images/01.jpg',
          BodyEnd:
            'Heres a small text description for the card content. Nothing more, nothing less.',
        },
        {
          title: 'Card Title',
          BodyStart:
            'Heres a small text description for the card content. Nothing more, nothing less.',
          img: 'assets/images/01.jpg',
          BodyEnd:
            'Heres a small text description for the card content. Nothing more, nothing less.',
        },
      ],
    },
  ];

  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  constructor(private modalCtrl: ModalController) {}
}
