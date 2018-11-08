import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Joke, JokeResult } from '../models';

const routes = {
  joke: () => `assets/api/joke.json`
};

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getJokes(): Observable<Joke[]> {
    return this.httpClient
    .cache()
    .get(routes.joke())
    .pipe(
      map((body: any) => { console.log(body); return body; }),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
