import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import AppStore from './AppStore';

it( 'renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render(
        <Provider store={ AppStore } >
            <App />
        </Provider>, div );
} );
