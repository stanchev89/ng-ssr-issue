import { APP_INITIALIZER, ApplicationConfig, PLATFORM_ID } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_ROUTES } from './app.routes';
import { appInitializer } from './app.initializer';
import { TestService } from './core/services/test/test.service';
import { REQUEST } from './ssr-tokens';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [PLATFORM_ID, TestService, REQUEST],
      multi: true
    }
  ]
};
