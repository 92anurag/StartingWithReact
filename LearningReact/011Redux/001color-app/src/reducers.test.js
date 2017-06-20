import expect from 'jest-matchers';

import { color } from './reducers';
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
            type: 'RATE_COLOR',
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
            type: 'RATE_COLOR',
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
