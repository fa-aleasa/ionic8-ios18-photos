import { Component } from '@angular/core';

import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['ar-SA', 'en-US']);

    this.translate.setDefaultLang('ar-SA');
    this.translate.use('ar-SA');

    // this.translate.use(this.translate.getBrowserLang()? 'en-US' : 'ar-SA');

    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar-SA";

  }}
