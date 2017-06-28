import { v4 } from 'uuid';

import C from './constants';

export const removeColor = id => ( {
    type: C.actions.REMOVE_COLOR,
    id,
} );

export const rateColor = ( id, rating ) => ( {
    type: C.actions.RATE_COLOR,
    id,
    rating,
} );

export const sortColors = ( sortedBy ) => {
    const action = { type: C.actions.SORT_COLORS };
    switch ( sortedBy ) {
    case 'rating':
        action.sortBy = C.sortOptions.SORTED_BY_RATING;
        break;

    case 'title':
        action.sortBy = C.sortOptions.SORTED_BY_TITLE;
        break;

    default:
        action.sortBy = C.sortOptions.SORTED_BY_DATE;
    }
    return action;
};

export const addColor = ( title, color ) => ( {
    type: C.actions.ADD_COLOR,
    id: v4(),
    title,
    color,
    timestamp: new Date().toString(),
} );
