import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { v4 } from 'uuid';

export default class CountryList extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            countryNames: [],
            loading: false,
        };
    }

    componentDidMount() {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState( { loading: true } );
        fetch( 'https://restcountries.eu/rest/v1/all' )
            .then( response =>
                response.json(),
            )
            .then( json =>
                json.map( country => country.name ),
            )
            .then( countryNames =>
                this.setState( { countryNames, loading: false } ),
            );
    }

    render() {
        const { countryNames, loading } = this.state;
        if ( loading ) {
            return ( <div>Loading Country Names...</div> );
        }
        if ( countryNames.length === 0 ) {
            return ( <div>No Country Names</div> );
        }
        return (
            <ul>
                { countryNames.map( country => <li key={ v4() }> { country } </li> ) }
            </ul>
        );
    }
}
