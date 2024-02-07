import { InjectionToken, makeStateKey } from '@angular/core';

export const TRANSFER_STATE_KEY = makeStateKey<any>('test-key');

export const REQUEST = new InjectionToken('REQUEST', { providedIn: 'platform', factory: () => 'unknown' });
