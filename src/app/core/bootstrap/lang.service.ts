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
    return new Promise<void>(async resolve => {
      const browserLang = navigator.language;
      let defaultLang = browserLang.match(/ar-SA|en-US/) ? browserLang : 'ar-SA';

      let getStoredOptions = await this.settings.getStoredOptions();
      defaultLang =  getStoredOptions.language ? getStoredOptions.language : this.settings.options.language;

      await this.settings.setLanguage(defaultLang);

      this.translate.setDefaultLang(defaultLang);
      this.translate.use(defaultLang).subscribe({
        // next: () => console.log(`Successfully initialized '${defaultLang}' language.'`),
        error: () => console.error(`Problem with '${defaultLang}' language initialization.'`),
        complete: () => resolve(),
      });
    });
  }
}
