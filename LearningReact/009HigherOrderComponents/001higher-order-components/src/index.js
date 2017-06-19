import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render( <PeopleList />, document.getElementById( 'root' ) );
registerServiceWorker();
