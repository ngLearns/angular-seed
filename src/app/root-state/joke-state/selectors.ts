import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { featureAdapter, State } from './state';
import { Joke } from '@app/@sample.basic/jokes/models';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectJokeState: MemoizedSelector<object, State> = createFeatureSelector<State>('joke');

export const selectAllJokeItems: (state: object) => Joke[] = featureAdapter.getSelectors(selectJokeState).selectAll;

export const selectJokeById = (id: string) =>
  createSelector(
    this.selectAllJokeItems,
    (allJokes: Joke[]) => {
      if (allJokes) {
        return allJokes.find(p => p.id === id);
      } else {
        return null;
      }
    }
  );

export const selectJokeError: MemoizedSelector<object, any> = createSelector(
  selectJokeState,
  getError
);

export const selectJokeIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectJokeState,
  getIsLoading
);
