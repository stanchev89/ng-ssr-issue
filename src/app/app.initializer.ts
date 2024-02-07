import { TransferState } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { TestService } from './core/services/test/test.service';



export function appInitializer(platformId: Object, testService: TestService, request: Request): () => Promise<any> {
  return () => {
    if (isPlatformServer(platformId)) {
      console.log('APP_INITIALIZER -> SERVER');
      return testService.initializeSSR(request);
    }
    console.log('APP_INITIALIZER -> CLIENT');
    testService.applyInitialData();
    return Promise.resolve();
  };
}
