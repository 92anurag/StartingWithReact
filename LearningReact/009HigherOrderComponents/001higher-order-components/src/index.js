import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList';
import DataComponent from './components/DataComponent';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const RandomMeUsers = DataComponent( PeopleList, 'https://randomuser.me/api/' );

ReactDOM.render( <RandomMeUsers count={ 10 } />, document.getElementById( 'root' ) );
registerServiceWorker();
