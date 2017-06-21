import { createStore, combineReducers } from 'redux';
import { colors, sort } from './reducers';
import initialState from './InitialState';

const AppStore = createStore(
    combineReducers( { colors, sort } ),
    initialState,
);

export default AppStore;
