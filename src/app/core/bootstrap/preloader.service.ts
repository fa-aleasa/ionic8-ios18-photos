import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class PreloaderService {
  private selector = 'globalLoader';
  private selectorText = 'h1';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService,
  ) {
    const el = this.document.getElementById(this.selectorText);
    let text = this.translate.instant('LOADING');
    if (el) {
      el.innerHTML = text
    }
  }

  private getElement() {
    return this.document.getElementById(this.selector);
  }

  hide() {
    const el = this.getElement();
    if (el) {
      el.addEventListener('transitionend', () => {
        el.className = 'global-loader-hidden';
        el.remove();
      });

      if (!el.classList.contains('global-loader-hidden')) {
        el.className += 'global-loader-fade-out';
      }
    }
  }
}
