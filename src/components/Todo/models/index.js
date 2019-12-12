import omit from 'lodash/omit';
import * as effects from './effects';
import reducer from './reducers';
import * as selectors from './selectors';

const initialState = {
    todos: [],
};

export default {
    name: 'todo',
    state: initialState,
    effects: () => effects,
    reducers: reducer.reducers,
    selectors: omit(selectors, Object.keys(selectors).filter(prop => selectors[prop].omitToRematch)),
};
  