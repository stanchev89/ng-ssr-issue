import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideProtractorTestingSupport(), provideClientHydration()]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
