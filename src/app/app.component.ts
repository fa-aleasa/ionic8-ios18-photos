import { Component } from '@angular/core';
import { PreloaderService } from './core/bootstrap/preloader.service';
import { SettingsService } from './core/bootstrap/settings.service';
import { LangService } from './core/bootstrap/lang.service';
import { ModeService } from './core/bootstrap/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private langService: LangService,
    private modeService: ModeService,
    private preloader: PreloaderService,
  ) {
    this.modeService.load();
    this.langService.load();
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
