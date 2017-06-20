import React from 'react';

// eslint-disable-next-line react/prop-types
const Countdown = ( { count, tick, reset } ) => {
    if ( count ) {
        setTimeout( () => tick( count ), 1000 );
    }

    return ( count ) ?
        <h1>{ count }</h1> :
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div onClick={ () => reset( 10 ) }>
            <span>CELEBRATE!!!!</span>
            <span>(click to start over)</span>
        </div>;
};

export default Countdown;
