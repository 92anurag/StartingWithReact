import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/APP.css';
import AppStore from './AppStore';

const render = () => {
    ReactDOM.render( <App store={ AppStore } />, document.getElementById( 'root' ) );
}

AppStore.subscribe( render );
render();

registerServiceWorker();
