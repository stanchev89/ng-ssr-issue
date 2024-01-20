import { makeStateKey, TransferState } from '@angular/core';

export const TRANSFER_STATE_KEY = makeStateKey<any>('transfer_state');

export function appInitializer(state: TransferState): () => Promise<any> {
  return () => {
    console.log('APP INITIALIZER');
    console.log('is empty ', state.isEmpty);
    console.log(state.get(TRANSFER_STATE_KEY, 'default'));
    return Promise.resolve();
  };
}
