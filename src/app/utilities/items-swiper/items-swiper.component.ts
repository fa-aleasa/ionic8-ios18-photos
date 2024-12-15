import { Component, Input, OnInit } from '@angular/core';

import { IonicSlides, ModalController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

import { ModalItemsSwiper } from './modal-items-swiper/modal-items-swiper';

@Component({
  selector: 'app-items-swiper',
  templateUrl: './items-swiper.component.html',
  styleUrls: ['./items-swiper.component.scss'],
})
export class ItemsSwiperComponent implements OnInit {
  swiperModules = [IonicSlides];

  @Input() content = {
    label: 'items',
    items: [
      {
        icon: 'list-circle',
        color: '',
        name: 'item',
        detail: false,
        note: '8',
        modalName:'SettingsHome'
      }
    ],
  };

  items: any[] = [];

  constructor(private modalCtrl: ModalController) {}

  async modal() {
    const modal = await this.modalCtrl.create({
      component: ModalItemsSwiper,
      componentProps: { content: this.content },
      presentingElement: document.getElementById('main-content')!,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

  ngOnInit() {
    this.items = this.groupByFour(this.content.items);
  }

  groupByFour(data: any[]) {
    let newData: any[] = [];
    let j = 0;

    newData.push([]);
    for (let i = 1; i <= data.length; i++) {
      newData[j].push(data[i - 1]);
      if (i % 4 == 0) {
        newData.push([]);
        j++;
      }
    }
    if (newData[0].length === 0) {
      // if the data you received was epmty
      newData.pop();
    }
    return newData;
  }
}
