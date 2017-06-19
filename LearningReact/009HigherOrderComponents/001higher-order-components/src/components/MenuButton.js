import React, { Component } from 'react';

export default class MenuButton extends Component {
    componentWillReceiveProps( nextProps ) {
        // eslint-disable-next-line react/prop-types
        const collapsed = ( nextProps.collapsed && nextProps.collapsed === true );
        this.setState( { collapsed } );
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const { children, collapsed, txt, expandCollapse } = this.props;
        return (
            <div className="pop-button">
                <button onClick={ expandCollapse }>{ txt }</button>
                {
                    ( !collapsed ) ?
                        <div className="pop-up">{ children }</div> :
                        ''
                }
            </div>
        );
    }
}
