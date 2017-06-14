import React from 'react';

export default class Character extends React.Component {

    render() {
        return (
            <div>
                <h2>Characters List</h2>
                <h4>{this.props.question}</h4>
            </div>
        );
    }
}