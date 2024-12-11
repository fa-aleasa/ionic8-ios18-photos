import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { StartupService } from './core/bootstrap/startup.service';
import { LangService } from './core/bootstrap/lang.service';
import { ModeService } from './core/bootstrap/mode.service';
import { CapacitorStorageService } from './core/bootstrap/storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    IonicModule.forRoot({
      mode: 'ios',
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withInterceptorsFromDi()),
    // ME ---------------------------------------
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: LangServiceFactory,
      deps: [LangService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: ModeServiceFactory,
      deps: [ModeService],
      multi: true,
    },
    CapacitorStorageService,
    // ME ---------------------------------------
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}
export function LangServiceFactory(LangService: LangService) {
  return () => LangService.load();
}
export function ModeServiceFactory(ModeService: ModeService) {
  return () => ModeService.load();
}
