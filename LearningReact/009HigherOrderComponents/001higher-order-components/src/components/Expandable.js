import React, { Component } from 'react';

const Expandable = ComposedComponent =>
    class ExpandableClass extends Component {
        constructor( props ) {
            super( props );
            // eslint-disable-next-line react/prop-types
            const collapsed = props.hidden && props.hidden === true;
            this.state = { collapsed };
            this.expandCollapse = this.expandCollapse.bind( this );
        }

        expandCollapse() {
            const collapsed = !this.state.collapsed;
            this.setState( { collapsed } );
        }

        render() {
            return ( <ComposedComponent
                expandCollapse={ this.expandCollapse }
                { ...this.state }
                { ...this.props }
            /> );
        }
    };

export default Expandable;
