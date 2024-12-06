import { Component } from '@angular/core';
import { PreloaderService } from './core/bootstrap/preloader.service';
import { SettingsService } from './core/bootstrap/settings.service';
import { TranslateLangService } from './core/bootstrap/translate-lang.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private settings: SettingsService,
    private translateLangService: TranslateLangService,
    private preloader: PreloaderService,
  ) {
    this.translateLangService.load()
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
