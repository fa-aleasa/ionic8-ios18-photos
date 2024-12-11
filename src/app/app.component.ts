import { Component } from '@angular/core';
import { PreloaderService } from './core/bootstrap/preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private preloader: PreloaderService,
  ) { }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
