import C from './constants';

export const color = ( state = {}, action ) => {
    switch ( action.type ) {

    case C.actions.ADD_COLOR:
        return {
            id: action.id,
            title: action.title,
            color: action.color,
            timestamp: action.timestamp,
            rating: 0,
        };

    case C.actions.RATE_COLOR:
        return ( state.id !== action.id ) ? state : { ...state, rating: action.rating };

    default:
        return state;
    }
};

export const colors = ( state = [], action ) => {
    switch ( action.type ) {
    case C.actions.ADD_COLOR:
        return [ ...state, color( {}, action ) ];

    case C.actions.RATE_COLOR:
        return state.map( c => color( c, action ) );

    case C.actions.REMOVE_COLOR:
        return state.filter( c => c.id !== action.id );

    default:
        return state;
    }
};

export const sort = ( state = C.sortOptions.SORTED_BY_DATE, action ) => {
    switch ( action.type ) {

    case C.actions.SORT_COLORS:
        return action.sortBy;

    default:
        return state;
    }
};
