import React from 'react';

// eslint-disable-next-line react/prop-types
const PeopleList = ( { data } ) => (
    <ol className="people-list"> {
        data.map( ( person, index ) => {
            const { first, last } = person.name;
            // eslint-disable-next-line react/no-array-index-key
            return ( <li key={ index } >{ first } { last } </li> );
        } ) }
    </ol>
);

export default PeopleList;
