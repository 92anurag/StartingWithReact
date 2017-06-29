import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import { NewColor, Menu, Colors } from './components/containerComponents';

class App extends Component {
    static propTypes = {
        store: PropTypes.shape( {
            dispatch: PropTypes.func.isRequired,
            getState: PropTypes.func.isRequired,
            subscribe: PropTypes.func.isRequired,
        } ).isRequired,
    }

    static defaultProps = {
        store: {},
    }

    static childContextTypes = {
        store: PropTypes.shape( {
            dispatch: PropTypes.func.isRequired,
            getState: PropTypes.func.isRequired,
        } ).isRequired,
    }

    getChildContext() {
        return {
            store: this.props.store,
        };
    }

    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe( () => this.forceUpdate() );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="app">
                    <Menu />
                    <NewColor />
                    <Colors />
                </div>
            </div>
        );
    }
}

export default App;
