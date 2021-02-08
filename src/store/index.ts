import { createStore } from 'redux';

import { appStore } from './reducer';

export const store = createStore(appStore);

export default store;
