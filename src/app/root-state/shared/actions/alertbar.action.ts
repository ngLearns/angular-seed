import { Action } from '@ngrx/store';
import { createActionType } from '../utils';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap/alert/alert-config';

export const ALERTBAR_OPEN = createActionType('ALERTBAR_OPEN');
export const ALERTBAR_CLOSE = createActionType('ALERTBAR_CLOSE');

export class AlertbarOpen implements Action {
  readonly type = ALERTBAR_OPEN;

  constructor(
    public payload: {
      message: string;
      action?: string;
      config?: NgbAlertConfig;
    }
  ) {}
}

export class AlertbarClose implements Action {
  readonly type = ALERTBAR_CLOSE;
}

export type AlertbarAction = AlertbarOpen | AlertbarClose;
