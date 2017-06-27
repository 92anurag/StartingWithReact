import expect from 'jest-matchers';

import * as actionCreators from './actionCreators';
import C from './constants';

describe( 'actionCreaters', () => {
    test( 'removeColor', () => {
        const action = actionCreators.removeColor( 'a' );
        expect( action.type ).toBe( C.actions.REMOVE_COLOR );
        expect( action.id ).toBe( 'a' );
    } );

    test( 'rateColor', () => {
        const action = actionCreators.rateColor( 'a', 1 );
        expect( action.type ).toBe( C.actions.RATE_COLOR );
        expect( action.rating ).toBe( 1 );
        expect( action.id ).toBe( 'a' );
    } );

    describe( 'sortColors()', () => {
        test( 'with rating', () => {
            const action = actionCreators.sortColors( 'rating' );
            expect( action.type ).toBe( C.actions.SORT_COLORS );
            expect( action.sortBy ).toBe( C.sortOptions.SORTED_BY_RATING );
        } );

        test( 'with title', () => {
            const action = actionCreators.sortColors( 'title' );
            expect( action.type ).toBe( C.actions.SORT_COLORS );
            expect( action.sortBy ).toBe( C.sortOptions.SORTED_BY_TITLE );
        } );

        test( 'with date', () => {
            const action = actionCreators.sortColors( 'date' );
            expect( action.type ).toBe( C.actions.SORT_COLORS );
            expect( action.sortBy ).toBe( C.sortOptions.SORTED_BY_DATE );
        } );

        test( 'default', () => {
            const action = actionCreators.sortColors( '' );
            expect( action.type ).toBe( C.actions.SORT_COLORS );
            expect( action.sortBy ).toBe( C.sortOptions.SORTED_BY_DATE );
        } );
    } );

    test( 'addColor', () => {
        const action = actionCreators.addColor( 'a', '#FF0000' );
        expect( action.type ).toBe( C.actions.ADD_COLOR );
        expect( action.title ).toBe( 'a' );
        expect( action.color ).toBe( '#FF0000' );
        expect( typeof action.id ).toBe( 'string' );
        expect( typeof action.timeStamp ).toBe( 'string' );
    } );
} );
