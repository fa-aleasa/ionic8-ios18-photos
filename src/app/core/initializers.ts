import { APP_INITIALIZER, inject } from '@angular/core';

import { LangService } from './bootstrap/lang.service';
export function LangServiceFactory(LangService: LangService) {
  return () => LangService.load();
}

import { StartupService } from './bootstrap/startup.service';
export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

export const appInitializerProviders = [
  {
    provide: APP_INITIALIZER,
    useFactory: LangServiceFactory,
    deps: [LangService],
    multi: true,
  },
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  },
];
