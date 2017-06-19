import React from 'react';

// eslint-disable-next-line react/prop-types
const CountryNamesDropDown = ( { data, selected = '' } ) => (
    <select className="country-list" defaultValue={ selected }> {
        data.map( ( { name }, index ) =>
            // eslint-disable-next-line react/no-array-index-key
            <option key={ index } value={ name }>{ name }</option>,
        ) }
    </select>
);

export default CountryNamesDropDown;
