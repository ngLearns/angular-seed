import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IndexedDBDatabase, JSONSchema } from '@ngx-pwa/local-storage';

const routes = {
  quote: (c: RandomQuoteContext) => `api/jokes/random?category=${c.category}`
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable()
export class QuoteService {
  constructor(private httpClient: HttpClient, protected localStorage: IndexedDBDatabase) {}

  getRandomQuote(context: RandomQuoteContext): Observable<string> {
    return this.httpClient
      .cache()
      .get(routes.quote(context))
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

  addUser = (user: JSONSchema) => {
    this.localStorage.setItem('user', user);
  };

  getUsers = () => {
    return this.localStorage.getItem<JSONSchema>('user');
  };
}
