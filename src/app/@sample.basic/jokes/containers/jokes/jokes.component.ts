import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Joke } from '../../models';
import { JokeStoreSelectors, JokeStoreActions, JokeStoreState } from '@app/root-state/joke-state';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes$: Observable<Joke[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<JokeStoreState.State>) {}

  ngOnInit() {
    this.jokes$ = this.store$.select(JokeStoreSelectors.selectAllJokeItems);

    this.error$ = this.store$.select(JokeStoreSelectors.selectJokeError);

    this.isLoading$ = this.store$.select(JokeStoreSelectors.selectJokeIsLoading);

    this.store$.dispatch(new JokeStoreActions.LoadRequestAction());
  }

  onRefresh(event: any) {
    console.log(event);
    this.store$.dispatch(new JokeStoreActions.LoadRequestAction());
  }
}
