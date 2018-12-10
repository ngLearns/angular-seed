import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { Joke, JokeResult } from '../models';

const routes = {
    joke: () => `assets/api/joke.json`
};

@Injectable()
export class DataService {
    private delay = 2000;
    constructor(private httpClient: HttpClient) {
    }
    getJokes(): Observable<Joke[]> {
        return this.httpClient
            .cache()
            .disableApiAuthentication()
            .get(routes.joke())
            .pipe(
                delay(this.delay),
                map((body: any) => {
                    return body;
                }),
                catchError(() => of('Error, could not load joke :-('))
            );
    }
}
