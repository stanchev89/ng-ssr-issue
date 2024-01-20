import { APP_INITIALIZER, ApplicationConfig, TransferState } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_ROUTES } from './app.routes';
import { appInitializer } from './app.initializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [TransferState],
      multi: true
    }
  ]
};
