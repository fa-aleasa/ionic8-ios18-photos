import { Component, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { SettingsService } from '../core/bootstrap/settings.service';
import { TranslateService } from '@ngx-translate/core';
import { AppModal } from '../app.modal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('sheetModal') inlineModal!: ModalController;

  appLang: string = this.settings.options.language;
  appMode: string = this.settings.options.mode;

  //-------------------------------------------------------------------------------
  // FULLSWIPER COMPONENET
  fullSwiperProps = {
    pagination: true,
    loop: true,
    autoplay: 3000,
    height: 50,
    align: 'end',
    center: false,
  };
  fullSwiperContent = [
    {
      background: 'url(assets/images/02.jpg)',
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
      background: 'url(assets/images/01.jpg)',
      title: '',
      subtitle: '',
      detail:
        'Heres a small text description for the card content. Nothing more, nothing less.',
      hasButton: false,
      button: {
        label: 'More info',
        routerLink: ['/home'],
        queryParams: { modal: 'MoreInfo', present: 'true' },
      },
    },
    {
      background: 'url(assets/images/03.jpg)',
      title: '',
      subtitle: '',
      detail: '',
      hasButton: false,
      button: {
        label: 'More info',
        routerLink: ['/home'],
        queryParams: { modal: 'MoreInfo', present: 'true' },
      },
    },
    {
      background: 'url(assets/images/04.jpg)',
      title: 'Card Title',
      subtitle: '',
      detail: '',
      hasButton: false,
      button: {
        label: 'More info',
        routerLink: ['/home'],
        queryParams: { modal: 'MoreInfo', present: 'true' },
      },
    },
    {
      background: 'url(assets/images/05.jpg)',
      title: '',
      subtitle: 'Card Subtitle',
      detail: '',
      hasButton: false,
      button: {
        label: 'More info',
        routerLink: ['/home'],
        queryParams: { modal: 'MoreInfo', present: 'true' },
      },
    },
  ];
  //-------------------------------------------------------------------------------
  // ITEMS COMPONENET
  itemsContent = {
    label: 'items',
    items: [
      {
        icon: 'list',
        color: 'danger',
        name: 'list',
        detail: false,
        note: '2',
        modalName: 'SettingsHome',
      },
      {
        icon: 'list-circle',
        color: '',
        name: 'item',
        detail: false,
        note: '8',
        modalName: 'SettingsHome',
      },
      {
        icon: 'list-circle',
        color: '',
        name: 'item',
        detail: false,
        note: '8',
        modalName: 'SettingsHome',
      },
      {
        icon: 'list-circle',
        color: '',
        name: 'item',
        detail: false,
        note: '8',
        modalName: 'SettingsHome',
      },
      {
        icon: 'list-circle',
        color: '',
        name: 'item',
        detail: false,
        note: '8',
        modalName: 'SettingsHome',
      },
      {
        icon: 'list-circle',
        color: '',
        name: 'item',
        detail: false,
        note: '8',
        modalName: 'SettingsHome',
      },
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

  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private settings: SettingsService,
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      let modalName = queryParams.get('modal');
      let isPresenting = queryParams.get('present');
      if (modalName !== null) {
        this.openAppModal(modalName, isPresenting);
        modalName = null;
        isPresenting = null;
      }
    });
  }

  async openAppModal(name: any, isPresenting?: any) {
    let present;
    if (isPresenting === 'true' || isPresenting === true) {
      present = document.getElementById('main-content')!;
    }

    const modal = await this.modalCtrl.create({
      component: AppModal,
      componentProps: { componentName: name },
      presentingElement: present,
    });
    this.router.navigate([]);
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

  async openProfileModal() {
    this.dismissSettingsModal();
    setTimeout(async () => {
      this.openAppModal('SettingsProfile');
    }, 300);
  }

  dismissSettingsModal() {
    this.inlineModal.dismiss();
  }

  handleLangChange(e: any) {
    if (e.detail.value !== this.appLang) {
      this.settings.changeLanguage();
      window.location.reload();
    } else {
      window.location.reload();
    }
  }

  handleModeChange(e: any) {
    this.settings.changeMode(e.detail.value);
  }

  async logout() {
    let okText = this.translate.instant('logout');
    let cancelText = this.translate.instant('cancel');
    let headerText = this.translate.instant('logoutAlertHeader');

    const alert = await this.alertController.create({
      header: headerText,
      // subHeader: 'A Sub Header Is Optional',
      // message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: cancelText,
          role: 'cancel',
          handler: () => {
            // console.log('Alert canceled');
          },
        },
        {
          text: okText,
          role: 'confirm',
          handler: () => {
            this.dismissSettingsModal();
          },
          cssClass: 'red-text',
        },
      ],
    });
    await alert.present();
  }
}
