import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { IonicSlides, IonModal } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-items-swiper',
  templateUrl: './items-swiper.component.html',
  styleUrls: ['./items-swiper.component.scss'],
})
export class ItemsSwiperComponent implements OnInit {
  swiperModules = [IonicSlides];

  //-------------------------------------------------------------------------------
  // BASICS DATA
  @Input() content = {
    label: 'label',
    items: [
      {
        icon: 'list-circle',
        color: '',
        name: 'item',
        detail: false,
        note: '8',
        modalName: 'SettingsHome',
      },
    ],
  };
  //-------------------------------------------------------------------------------

  items: any[] = [];

  presentingElement: any = null;
  @ViewChild(IonModal) modal!: IonModal;
  @Input() label: string = 'label';

  constructor() {}

  ngOnInit() {
    this.items = this.groupByFour(this.content.items);
    this.presentingElement = document.getElementById('main-content');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log(`Hello, ${ev.detail.data}!`);
    }
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
