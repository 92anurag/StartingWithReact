/*jshint esversion: 6 */

import {Component} from 'react';

export class AddColorForm extends Component {
    render() {
        return (
            <form onSubmit={e=>e.preventDefault()}>
                <input type='text' placeholder='color title...' required/>
                <input type='color' required/>
                <button>ADD</button>
            </form>
        );
    }
}

