import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class ModeService {
  browserMode = window.matchMedia('(prefers-color-scheme: dark)');
  defaultMode = this.settings.options.mode;

  constructor(private settings: SettingsService) {}

  load() {
    return new Promise<void>((resolve) => {
      let isDark;
      let StoredMode = this.settings.getStoredOptions().mode
        ? this.settings.getStoredOptions().mode
        : this.defaultMode;

        StoredMode === 'auto'
        ? (isDark = this.browserMode.matches ? true : false)
        : StoredMode === 'dark'
        ? (isDark = true)
        : (isDark = false);

      document.documentElement.classList.toggle('ion-palette-dark', isDark);

      this.browserMode.addEventListener('change', (e) => {
        let StoredMode = this.settings.getStoredOptions().mode;

        StoredMode === 'auto'
        ? (isDark = this.browserMode.matches ? true : false)
        : StoredMode === 'dark'
        ? (isDark = true)
        : (isDark = false);
        document.documentElement.classList.toggle('ion-palette-dark', isDark);
      });
    });
  }
}
