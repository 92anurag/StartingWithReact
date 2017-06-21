import expect from 'jest-matchers';

import { color, colors, sort } from './reducers';
import C from './constants';

describe( 'color reducer', () => {
    test( 'color({}, {type:"ADD_COLOR"} is ', () => {
        const action = {
            type: C.actions.ADD_COLOR,
            id: '4243e1p0-9abl-4e90-95p4-8001l8yf3036',
            color: '#0000FF',
            title: 'Big Blue',
            timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
        };
        const newState = color( {}, action );
        const keysOfInterest = [ 'id', 'color', 'title', 'timestamp' ];
        const nKeys = keysOfInterest.length;
        for ( let i = 0; i < nKeys; i += 1 ) {
            const key = keysOfInterest[ i ];
            expect( newState[ key ] ).toBe( action[ key ] );
        }
        expect( newState.rating ).toBe( 0 );
    } );

    test( 'color({existingColorWithoutMatchingID}, {actionType:"RATE_COLOR"}) is ', () => {
        const existingColor = {
            id: '128e1p5-3abl-0e52-33p0-8401l8yf3036',
            title: 'Big Blue',
            color: '#0000FF',
            timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
            rating: 0,
        };

        const action = {
            type: C.actions.RATE_COLOR,
            id: '4243e1p0-9abl-4e90-95p4-8001l8yf3036',
            rating: 4,
        };

        const newState = color( existingColor, action );
        const keysOfInterest = [ 'id', 'color', 'title', 'timestamp', 'rating' ];
        const nKeys = keysOfInterest.length;
        for ( let i = 0; i < nKeys; i += 1 ) {
            const key = keysOfInterest[ i ];
            expect( newState[ key ] ).toBe( existingColor[ key ] );
        }
    } );

    test( 'color({existingColorWithMatchingID}, {actionType:"RATE_COLOR"}) is ', () => {
        const existingColor = {
            id: '4243e1p0-9abl-4e90-95p4-8001l8yf3036',
            title: 'Big Blue',
            color: '#0000FF',
            timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
            rating: 0,
        };

        const action = {
            type: C.actions.RATE_COLOR,
            id: '4243e1p0-9abl-4e90-95p4-8001l8yf3036',
            rating: 4,
        };

        const newState = color( existingColor, action );
        const keysOfInterest = [ 'id', 'color', 'title', 'timestamp' ];
        const nKeys = keysOfInterest.length;
        for ( let i = 0; i < nKeys; i += 1 ) {
            const key = keysOfInterest[ i ];
            expect( newState[ key ] ).toBe( existingColor[ key ] );
        }
        expect( newState.rating ).toBe( action.rating );
    } );
} );

describe( 'colors reducer', () => {
    test( 'ADD_COLOR', () => {
        const currentColors = [
            {
                id: '9813e2p4-3abl-2e44-95p4-8001l8yf3036',
                title: 'Berry Blue',
                color: '#000066',
                rating: 0,
                timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
            },
        ];

        const action = {
            type: C.actions.ADD_COLOR,
            id: '5523e7p8-3ab2-1e35-95p4-8001l8yf3036',
            title: 'Party Pink',
            color: '#F142FF',
            timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
        };

        const newState = colors( currentColors, action );
        expect( newState.length ).toBe( 2 );
        const existingColor = newState[ 0 ];
        const newColor = newState[ 1 ];
        Object.keys( currentColors[ 0 ] ).map( ( key ) => {
            expect( existingColor[ key ] ).toBe( currentColors[ 0 ][ key ] );
            if ( key === 'rating' ) {
                expect( newColor[ key ] ).toBe( 0 );
            } else {
                expect( newColor[ key ] ).toBe( action[ key ] );
            }
            return true;
        } );
    } );

    test( 'RATE_COLOR', () => {
        const currentColors = [
            {
                id: '9813e2p4-3abl-2e44-95p4-8001l8yf3036',
                title: 'Berry Blue',
                color: '#000066',
                rating: 0,
                timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
            },
            {
                id: '5523e7p8-3ab2-1e35-95p4-8001l8yf3036',
                title: 'Party Pink',
                color: '#F142FF',
                rating: 2,
                timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
            },
        ];
        const action = {
            type: C.actions.RATE_COLOR,
            id: '9813e2p4-3abl-2e44-95p4-8001l8yf3036',
            rating: 4,
        };

        const newColors = colors( currentColors, action );
        expect( newColors.length ).toBe( currentColors.length );
        const [ oldColor1, oldColor2 ] = currentColors;
        const [ color1, color2 ] = newColors;
        Object.keys( color1 ).map( ( key ) => {
            expect( color2[ key ] ).toBe( oldColor2[ key ] );
            if ( key === 'rating' ) {
                expect( color1[ key ] ).toBe( action.rating );
            } else {
                expect( color1[ key ] ).toBe( oldColor1[ key ] );
            }
            return true;
        } );
    } );

    test( 'REMOVE_COLOR', () => {
        const currentColors = [
            {
                id: '9813e2p4-3abl-2e44-95p4-8001l8yf3036',
                title: 'Berry Blue',
                color: '#000066',
                rating: 0,
                timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
            },
            {
                id: '5523e7p8-3ab2-1e35-95p4-8001l8yf3036',
                title: 'Party Pink',
                color: '#F142FF',
                rating: 2,
                timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
            },
        ];
        const action = {
            type: C.actions.REMOVE_COLOR,
            id: '9813e2p4-3abl-2e44-95p4-8001l8yf3036',
        };

        const newColors = colors( currentColors, action );
        expect( newColors.length ).toBe( currentColors.length - 1 );
        const [ , oldColor2 ] = currentColors;
        const [ color2 ] = newColors;
        Object.keys( color2 ).map( ( key ) => {
            expect( color2[ key ] ).toBe( oldColor2[ key ] );
            return true;
        } );
    } );
} );

describe( 'sort reducer', () => {
    test( 'empty state and empty action', () => {
        const oldState = undefined;
        const action = {
            type: C.actions.ADD_COLOR,
            sortBy: C.sortOptions.SORTED_BY_TITLE,
        };

        const newState = sort( oldState, action );
        expect( newState ).toBe( C.sortOptions.SORTED_BY_DATE );
    } );

    test( 'valid state with invalid action', () => {
        const oldState = C.sortOptions.SORTED_BY_RATING;
        const action = {
            type: C.actions.ADD_COLOR,
            sortBy: C.sortOptions.SORTED_BY_TITLE,
        };

        const newState = sort( oldState, action );
        expect( newState ).toBe( C.sortOptions.SORTED_BY_RATING );
    } );

    test( 'valid state with valid action', () => {
        const oldState = C.sortOptions.SORTED_BY_RATING;
        const action = {
            type: C.actions.SORT_COLORS,
            sortBy: C.sortOptions.SORTED_BY_TITLE,
        };

        const newState = sort( oldState, action );
        expect( newState ).toBe( C.sortOptions.SORTED_BY_TITLE );
    } );

    test( 'invalid state with valid action', () => {
        const oldState = undefined;
        const action = {
            type: C.actions.SORT_COLORS,
            sortBy: C.sortOptions.SORTED_BY_TITLE,
        };

        const newState = sort( oldState, action );
        expect( newState ).toBe( C.sortOptions.SORTED_BY_TITLE );
    } );
} );
