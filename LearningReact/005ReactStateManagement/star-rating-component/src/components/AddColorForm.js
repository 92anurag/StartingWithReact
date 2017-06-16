/*jshint esversion: 6 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/AddColorForm.css'

export default class AddColorForm extends Component {
    constructor() {
        super();
        // We needed to add a constructor to this ES6 component class because we moved submit to its own function.
        // With ES6 component classes, we must bind the scope of the component to any methods that need to access
        // that scope with this.
        this.submit = this.submit.bind(this);
    }

    static propTypes = {
        onNewColor: PropTypes.func
    }

    static defaultProps = {
        onNewColor: f => f
    }

    submit(e) {
        const {_title, _color} = this.refs;
        e.preventDefault();
        this.props.onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }

    render() {
        return (
            <form className="add-color"  onSubmit={this.submit}>
                <input ref='_title' type='text' placeholder='color title...' required/>
                <input ref='_color' type='color' required/>
                <button>ADD</button>
            </form>
        );
    }
}
