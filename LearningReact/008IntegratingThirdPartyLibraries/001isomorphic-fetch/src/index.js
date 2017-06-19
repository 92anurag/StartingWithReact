import React from 'react';
import ReactDOM from 'react-dom';
import CountryList from './components/CountryList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render( <CountryList />, document.getElementById( 'root' ) );
registerServiceWorker();
