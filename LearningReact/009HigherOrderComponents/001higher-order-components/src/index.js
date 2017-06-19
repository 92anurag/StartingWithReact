import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList';
import CountryNamesDropDown from './components/CountryNamesDropDown'
import DataComponent from './components/DataComponent';
import MenuButton from './components/MenuButton'
import Expandable from './components/Expandable'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const RandomMeUsers = DataComponent( PeopleList, 'https://randomuser.me/api/' );
const CountryNamesDD = DataComponent( CountryNamesDropDown, 'https://restcountries.eu/rest/v1/all' );
const PopUpButton = Expandable( MenuButton );

ReactDOM.render(
    <div>
        <RandomMeUsers count={ 10 } />
        <CountryNamesDD selected="United States" />
        <PopUpButton hidden={ true } txt="toggle pop">
            <h1>Hidden Content</h1>
            <p>This content will start off hidden</p>
        </PopUpButton>
    </div>,
    document.getElementById( 'root' ) );
registerServiceWorker();
