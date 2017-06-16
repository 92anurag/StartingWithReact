import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList'
import {v4} from 'uuid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors:[]
        }
        this.addColor = this.addColor.bind(this);
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ];
        this.setState({colors})
    }

    removeColor(id) {
        const colors = this.state.colors.filter(color=>color.id !== id);
        this.setState({colors});
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map((color) =>
            (color.id !== id) ?
                color :
                {...color, rating}
        );
        this.setState({colors});
    }

    render() {
        const {addColor} = this;
        const {colors} = this.state;
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div className="app">
              <AddColorForm onNewColor={addColor} />
              <ColorList colors={colors} onRemove={this.removeColor.bind(this)} onRate={this.rateColor.bind(this)} />
          </div>
        </div>
      );
    }
}

export default App;
