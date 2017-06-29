import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/APP.css';
import AppStore from './AppStore';

const render = () => {
    ReactDOM.render(
        <Provider store={ AppStore } >
            <App />
        </Provider>,
         document.getElementById( 'root' ) );
};

render();

registerServiceWorker();
