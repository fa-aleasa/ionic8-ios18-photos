import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Autoplay, Pagination } from 'swiper/modules';

// import { IonicSlides } from '@ionic/angular';
// import { register } from 'swiper/element/bundle';
// register();

@Component({
  selector: 'app-cover-full-swiper',
  templateUrl: './cover-full-swiper.component.html',
  styleUrls: ['./cover-full-swiper.component.scss'],
})
export class CoverFullSwiperComponent implements AfterViewInit {
  @ViewChild('swiper') swiper!: ElementRef<any>;
  swiperModules = [Autoplay, Pagination];
  // swiperModules = [IonicSlides];

  //-------------------------------------------------------------------------------
  // BASICS DATA
  cardStyle = 'height: 50vh !important;';
  @Input() props = {
    pagination: true,
    loop: true,
    autoplay: 0,
    height: 50,
    align: 'end',
    center: true,
  };
  @Input() content = [
    {
      background: 'url(assets/images/01.jpg)',
      title: 'Card Title',
      subtitle: 'Card Subtitle',
      detail:
        'Heres a small text description for the card content. Nothing more, nothing less.',
      hasButton: true,
      button: {
        label: 'More info',
        routerLink: ['/home'],
        queryParams: { modal: 'MoreInfo', present: 'true' },
      },
    },
    {
      background: 'url(assets/images/02.jpg)',
      title: 'Card Title',
      subtitle: 'Card Subtitle',
      detail:
        'Heres a small text description for the card content. Nothing more, nothing less.',
      hasButton: false,
      button: {
        label: 'More info',
        routerLink: ['/home'],
        queryParams: { modal: 'MoreInfo', present: 'true' },
      },
    },
  ];
  //-------------------------------------------------------------------------------

  constructor() {
    this.cardStyle = 'height: ' + this.props.height + 'vh !important;';
  }

  ngAfterViewInit() {
    // swiper parameters
    let swiperParams = {
      slidesPerView: 1,
      modules: this.swiperModules,
      pagination: this.props.pagination === true ? { clickable: true } : false,
    };
    if (this.props.autoplay > 0) {
      Object.assign(swiperParams, { autoplay: { delay: this.props.autoplay } });
    } else if (this.props.autoplay == 0 && this.props.loop) {
      Object.assign(swiperParams, { loop: true });
    }

    Object.assign(this.swiper.nativeElement, swiperParams);
    this.swiper.nativeElement.initialize();
  }
}
