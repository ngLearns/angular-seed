import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromSpinner from './spinner.reducer';

export const selectSpinnerEntity: MemoizedSelector<object, fromSpinner.State> = createFeatureSelector<
  fromSpinner.State
>('spinner');

export const isSpinnerShowing = createSelector(
  selectSpinnerEntity,
  fromSpinner.isShowing
);
