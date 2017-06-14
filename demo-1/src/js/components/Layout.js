import React from 'react';

import Movies from './movies/Movies';
import Characters from './characters/Characters';


export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {welcome:"Welcome to Star Wars Trivia!"};
        this.state.shoutout = 'No ShoutOuts!';
    }

    createNewShoutout(shoutout) {
        this.setState({shoutout});
    }

    render() {
        const moviesQuestion = 'Have you seen all of these Movies?';
        const charactersQuestion = 'What do you know about each of these Characters?';
        return (
            <div>
                <h1>{this.state.welcome}</h1>
                <h4>Newest Shoutout: {this.state.shoutout}!!!</h4>
                <Movies shoutout = {this.state.shoutout} createNewShoutout = {this.createNewShoutout.bind(this)} question = {moviesQuestion}/>
                <Characters question = {charactersQuestion}/>
            </div>
        )
    }
}
