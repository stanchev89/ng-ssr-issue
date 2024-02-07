import { inject, Injectable, signal, TransferState } from '@angular/core'
import { catchError, firstValueFrom, Observable, of, tap } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { TRANSFER_STATE_KEY } from '../../../ssr-tokens';

export const NOT_SET = Symbol('NOT_SET');

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private readonly todosUrl = 'https://jsonplaceholder.typicode.com/todos'
  private httpClient = inject(HttpClient)
  #transferState = inject(TransferState);
  public readonly todos = signal<any>(NOT_SET);

  initializeSSR(request: Request): Promise<any> {
    if (!request || (request as any) === 'unknown') {
      this.#transferState.set(TRANSFER_STATE_KEY, { request })
      return Promise.resolve(null);
    }
    return firstValueFrom(this.getTodos().pipe(tap((data) => {
      this.#transferState.set(TRANSFER_STATE_KEY, { data });
    }), catchError((error) => {
      this.#transferState.set(TRANSFER_STATE_KEY, { error })
      return of(null);
    })))
  }

  applyInitialData(): void {
    const transferredValue = this.#transferState.get(TRANSFER_STATE_KEY, { data: 'MISSING_DATA' });
    this.todos.set(transferredValue);
  }

  getTodos(): Observable<any> {
    return this.httpClient.get(this.todosUrl)
  }

  getPosts(): Observable<{ message: string }> {
    return this.httpClient.get<{ message: string }>('/api/v1/post')
  }
}
