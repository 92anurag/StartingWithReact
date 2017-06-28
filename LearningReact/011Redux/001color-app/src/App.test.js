import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppStore from './AppStore';

it( 'renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <App store={ AppStore } />, div );
} );
