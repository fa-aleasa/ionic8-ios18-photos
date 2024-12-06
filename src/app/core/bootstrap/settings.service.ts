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
    const storedOptions = this.store.get(this.key);
    this.options = Object.assign(defaults, storedOptions);
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

  setLanguage(lang: string) {
    this.options.language = lang;
    this.store.set(this.key, this.options);
    this.notify$.next(this.options);
  }

  setDirection(dir: string) {
    this.htmlElement.dir = dir;

    // this.store.set(this.key, this.options);
    this.notify$.next(this.options);
  }

  changeLanguage() {
    let newtLang =
      this.options.language === 'en-US'
        ? (this.options.language = 'ar-SA')
        : (this.options.language = 'en-US');
    this.setLanguage(newtLang);
  }
}
