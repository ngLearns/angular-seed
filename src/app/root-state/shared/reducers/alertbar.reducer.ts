import { ALERTBAR_CLOSE, ALERTBAR_OPEN, AlertbarAction } from '../actions/alertbar.action';

export interface State {
    show: boolean;
}

const initialState: State = {
    show: false
};

export function reducer(state: State = initialState, action: AlertbarAction) {
    switch (action.type) {
        case ALERTBAR_CLOSE:
            return { ...state, show: false };
        case ALERTBAR_OPEN:
            return { ...state, show: true };
        default:
            return state;
    }
}

export const isShowing = (state: State) => state.show;
