import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

// Notice that DataComponent is actually a function.
// All higher-order components are functions. ComposedComponent is the component that we will wrap.
// The returned class, DataComponent, stores and manages the state.
// When that state changes and the data has loaded, the ComposedComponent is rendered and that data is
// passed to it as a property.

const DataComponent = ( ComposedComponent, url ) =>
    class DataComponentClass extends Component {
        constructor( props ) {
            super( props );
            this.state = {
                data: [],
                loading: false,
                loaded: false,
            };
        }

        componentWillMount() {
            this.setState( { loading: true } );
            fetch( url )
                .then( response => response.json() )
                .then( obj => { return ( obj.results ) ? obj.results : obj; } )
                .then( data => this.setState( {
                    loaded: true,
                    loading: false,
                    data,
                } ) );
        }

        render() {
            return (
                <div className="data-component"> {
                    ( this.state.loading ) ?
                        <div>Loading...</div> :
                        <ComposedComponent { ...this.state } { ...this.props } /> }
                </div>
            );
        }
    };

export default DataComponent;
