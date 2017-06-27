import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colors, sort } from './reducers';
import initialState from './InitialState';

const logger = store => next => ( action ) => {
    /* eslint-disable no-console */
    console.groupCollapsed( 'dispatching', action.type );
    console.log( 'prev state', store.getState() );
    console.log( 'action', action );
    const result = next( action );
    console.log( 'next state', store.getState() );
    console.groupEnd();
    /* eslint-enable no-console */
    return result;
};

// const saver = store => next => ( action ) => {
//     const result = next( action );
//     localStorage[ 'redux-store' ] = JSON.stringify( store.getState() );
//     return result;
// };

const AppStore = createStore(
    combineReducers( { colors, sort } ),
    initialState,
    applyMiddleware( logger ),
);

export default AppStore;
