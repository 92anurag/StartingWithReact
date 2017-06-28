import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/AddColorForm.css';
import { addColor } from '../actionCreators';

export default class AddColorForm extends Component {
    static propTypes = {
        store: PropTypes.shape( {
            dispatch: PropTypes.func.isRequired,
        } ).isRequired,
    }

    constructor() {
        super();
        // We needed to add a constructor to this ES6 component class because we moved submit to its own function.
        // With ES6 component classes, we must bind the scope of the component to any methods that need to access
        // that scope with this.
        this.submit = this.submit.bind( this );
    }

    submit( e ) {
        const { titleInput, colorInput } = this;
        e.preventDefault();
        this.props.store.dispatch( addColor( titleInput.value, colorInput.value ) );
        titleInput.value = '';
        colorInput.value = '#000000';
        titleInput.focus();
    }

    render() {
        return (
            <form className="add-color" onSubmit={ this.submit }>
                <input ref={ ( input ) => { this.titleInput = input; } } placeholder="color title..." required />
                <input ref={ ( input ) => { this.colorInput = input; } } type="color" required />
                <button>ADD</button>
            </form>
        );
    }
}
