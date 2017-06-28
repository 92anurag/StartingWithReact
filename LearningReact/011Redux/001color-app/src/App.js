import React from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';

const App = ( { store } ) => (
    <div className="App">
        <div className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>
        <div className="app">
            <AddColorForm store={ store } />
            <ColorList store={ store } />
        </div>
    </div>
);

App.propTypes = {
    store: PropTypes.object,
};

App.defaultProps = {
    store: {},
};

export default App;
