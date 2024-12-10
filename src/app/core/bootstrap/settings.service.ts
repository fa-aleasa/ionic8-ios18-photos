import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { LocalStorageService } from '../storage.service';
import { AppSettings, defaults } from '../settings';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private key = 'ui-settings';
  options: AppSettings;

  private readonly notify$ = new BehaviorSubject<Partial<AppSettings>>({});

  private htmlElement!: HTMLHtmlElement;

  constructor(
    private store: LocalStorageService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.options = this.getStoredOptions();
    this.htmlElement = this.document.querySelector('html')!;
  }

  reset() {
    this.store.remove(this.key);
  }

  setOptions(options: AppSettings) {
    this.options = Object.assign(defaults, options);
    this.store.set(this.key, this.options);
    this.notify$.next(this.options);
  }

  getStoredOptions() {
    const storedOptions = this.store.get(this.key);
    return Object.assign(defaults, storedOptions);
  }

  setLanguage(lang: string) {
    this.htmlElement.lang = lang;

    this.options.language = lang;
    this.store.set(this.key, this.options);

    let dir = 'rtl';
    if (lang === 'en-US') {
      dir = 'ltr';
    }
    this.htmlElement.dir = dir;

    this.notify$.next(this.options);
  }
  changeLanguage() {
    let newtLang =
      this.options.language === 'en-US'
        ? (this.options.language = 'ar-SA')
        : (this.options.language = 'en-US');
    this.setLanguage(newtLang);
  }

  setMode(mode: string) {
    this.options.mode = mode;
    this.store.set(this.key, this.options);
    this.notify$.next(this.options);
  }
  changeMode(mode: string) {
    this.setMode(mode);

    let browserMode = window.matchMedia('(prefers-color-scheme: dark)');
    let isDark;

    mode === 'auto'
    ? (isDark = browserMode.matches ? true : false)
    : mode === 'dark'
    ? isDark = true
    : isDark = false

    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }
}
