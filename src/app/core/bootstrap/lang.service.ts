import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  constructor(
    private translate: TranslateService,
    private settings: SettingsService
  ) {}

  load() {
    return new Promise<void>(resolve => {
      // const browserLang = navigator.language;
      // const defaultLang = browserLang.match(/ar-SA|en-US/) ? browserLang : 'ar-SA';
      let defaultLang = this.settings.options.language;

      this.settings.setLanguage(defaultLang);

      this.translate.setDefaultLang(defaultLang);
      this.translate.use(defaultLang).subscribe({
        // next: () => console.log(`Successfully initialized '${defaultLang}' language.'`),
        error: () => console.error(`Problem with '${defaultLang}' language initialization.'`),
        complete: () => resolve(),
      });

    });
  }
}
