import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { CapacitorStorageService, LocalStorageService } from './storage.service';
import { AppSettings, defaults } from '../settings';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private key = 'ui-settings';
  options: AppSettings = defaults;

  private readonly notify$ = new BehaviorSubject<Partial<AppSettings>>({});
  private htmlElement!: HTMLHtmlElement;

  constructor(
    // private localStorageService: LocalStorageService,
    private capacitorStorageService: CapacitorStorageService,
    @Inject(DOCUMENT) private document: Document
  ) {
    const storedOptions = this.capacitorStorageService.get(this.key).then(() => {
      this.options = Object.assign(defaults, storedOptions);
    });
    this.htmlElement = this.document.querySelector('html')!;
  }

  async reset() {
    await this.capacitorStorageService.remove(this.key);
  }

  // setOptions(options: AppSettings) {
  //   this.options = Object.assign(defaults, options);
  //   this.capacitorStorageService.set(this.key, this.options);
  //   this.notify$.next(this.options);
  // }

  async getStoredOptions() {
    const storedOptions = await this.capacitorStorageService.get(this.key);
    return Object.assign(defaults, storedOptions);
  }

  async setLanguage(lang: string) {
    this.htmlElement.lang = lang;

    this.options.language = lang;
    await this.capacitorStorageService.set(this.key, this.options);

    let dir = 'rtl';
    if (lang === 'en-US') {
      dir = 'ltr';
    }
    this.htmlElement.dir = dir;

    this.notify$.next(this.options);
  }
  async changeLanguage() {
    let newtLang =
      this.options.language === 'en-US'
        ? (this.options.language = 'ar-SA')
        : (this.options.language = 'en-US');
    await this.setLanguage(newtLang);
  }

  async setMode(mode: string) {
    this.options.mode = mode;
    await this.capacitorStorageService.set(this.key, this.options);
    this.notify$.next(this.options);
  }
  async changeMode(mode: string) {
    await this.setMode(mode);

    let browserMode = window.matchMedia('(prefers-color-scheme: dark)');
    let isDark;

    mode === 'auto'
      ? (isDark = browserMode.matches ? true : false)
      : mode === 'dark'
      ? (isDark = true)
      : (isDark = false);

    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }
}
