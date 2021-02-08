import { appState, AppActionTypes } from './types';

const initState: appState = {
    user: {}
};

export const appStore = (state = initState, action: AppActionTypes) => {
    switch (action.type) {
        case 'SET_USER':
            return Object.assign({}, state, {
                user: action.user
            });
    }

    return state;
};

export default appStore
