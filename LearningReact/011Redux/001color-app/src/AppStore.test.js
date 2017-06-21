import expect from 'jest-matchers';
import AppStore from './AppStore';
import initialState from './InitialState';
import C from './constants';

describe( 'AppStore', () => {
    test( 'Initial state is ', () => {
        const state = AppStore.getState();
        expect( state ).toBe( initialState );
    } );

    test( 'Before ADD_COLOR', () => {
        expect( AppStore.getState().colors.length ).toBe( initialState.colors.length );
    } );

    test( 'After ADD_COLOR', () => {
        const action = {
            type: 'ADD_COLOR',
            id: '2222e1p5-3abl-0p523-30e4-8001l8yf2222',
            title: 'Party Pink',
            color: '#F142FF',
            timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
        };

        AppStore.dispatch( action );
        const newState = AppStore.getState();
        expect( newState.colors.length ).toBe( initialState.colors.length + 1 );
        expect( newState.colors[ 0 ] ).toBe( initialState.colors[ 0 ] );
        expect( newState.colors[ 1 ] ).toBe( initialState.colors[ 1 ] );
        expect( newState.colors[ 2 ] ).toBe( initialState.colors[ 2 ] );
        expect( newState.colors[ 3 ] ).toBe( initialState.colors[ 3 ] );
        expect( newState.colors[ 4 ].id ).toBe( action.id );
        expect( newState.colors[ 4 ].title ).toBe( action.title );
        expect( newState.colors[ 4 ].color ).toBe( action.color );
        expect( newState.colors[ 4 ].timestamp ).toBe( action.timestamp );
        expect( newState.colors[ 4 ].rating ).toBe( 0 );
    } );

    test( 'After RATE_COLOR', () => {
        const action = {
            type: 'RATE_COLOR',
            id: '2222e1p5-3abl-0p523-30e4-8001l8yf2222',
            rating: 5
        };

        const oldState = AppStore.getState();
        AppStore.dispatch( action );
        const newState = AppStore.getState();
        expect( newState.colors.length ).toBe( oldState.colors.length );
        expect( newState.colors[ 0 ] ).toBe( oldState.colors[ 0 ] );
        expect( newState.colors[ 1 ] ).toBe( oldState.colors[ 1 ] );
        expect( newState.colors[ 2 ] ).toBe( oldState.colors[ 2 ] );
        expect( newState.colors[ 3 ] ).toBe( oldState.colors[ 3 ] );
        expect( newState.colors[ 4 ].id ).toBe( oldState.colors[ 4 ].id );
        expect( newState.colors[ 4 ].title ).toBe( oldState.colors[ 4 ].title );
        expect( newState.colors[ 4 ].color ).toBe( oldState.colors[ 4 ].color );
        expect( newState.colors[ 4 ].timestamp ).toBe( oldState.colors[ 4 ].timestamp );
        expect( newState.colors[ 4 ].rating ).toBe( action.rating );

    } );
} );
