import React from 'react';

import Movies from './movies/Movies';
import Characters from './characters/Characters';


export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Movies />
                <Characters />
            </div>
        )
    }
}
