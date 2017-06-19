import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList';
import CountryNamesDropDown from './components/CountryNamesDropDown'
import DataComponent from './components/DataComponent';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const RandomMeUsers = DataComponent( PeopleList, 'https://randomuser.me/api/' );
const CountryNamesDD = DataComponent( CountryNamesDropDown, 'https://restcountries.eu/rest/v1/all' );

ReactDOM.render(
    <div>
        <RandomMeUsers count={ 10 } />
        <CountryNamesDD selected="United States" />
    </div>,
    document.getElementById( 'root' ) );
registerServiceWorker();
