import React, { Component } from 'react';
import { v4 } from 'uuid';
import logo from './logo.svg';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            colors: [
                { id: v4(), title: 'Ocean Blue', color: '#0000ff', rating: 0 },
                { id: v4(), title: 'Tomato', color: '#ff00ff', rating: 0 },
                { id: v4(), title: 'Lawn', color: '#00ff00', rating: 0 },
                { id: v4(), title: 'Party Pink', color: '#ff0000', rating: 0 },
            ],
        };
        this.addColor = this.addColor.bind( this );
        this.removeColor = this.removeColor.bind( this );
        this.rateColor = this.rateColor.bind( this );
    }

    addColor( title, color ) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0,
            },
        ];
        this.setState( { colors } );
    }

    removeColor( id ) {
        const colors = this.state.colors.filter( color => color.id !== id );
        this.setState( { colors } );
    }

    rateColor( id, rating ) {
        // eslint-disable-next-line no-confusing-arrow
        const colors = this.state.colors.map( color =>
            ( color.id !== id ) ?
                color :
                { ...color, rating },
        );
        this.setState( { colors } );
    }

    render() {
        const { addColor, removeColor, rateColor } = this;
        const { colors } = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="app">
                    <AddColorForm onNewColor={ addColor } />
                    <ColorList colors={ colors } onRemove={ removeColor } onRate={ rateColor } />
                </div>
            </div>
        );
    }
}

export default App;
