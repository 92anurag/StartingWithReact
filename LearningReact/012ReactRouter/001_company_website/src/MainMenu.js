import { NavLink } from 'react-router-dom';
import React from 'react';

import './stylesheets/menu.css';

const selectedStyle = {
    backgroundColor: 'white',
    color: 'slategray',
};

const MainMenu = () => (
    <nav className="main-menu" >
        <NavLink to="/" >[Home]</NavLink>
        <NavLink to="/about" activeStyle={ selectedStyle } >[About]</NavLink>
        <NavLink to="/events" activeStyle={ selectedStyle } >[Events]</NavLink>
        <NavLink to="/products" activeStyle={ selectedStyle } >[Products]</NavLink>
        <NavLink to="/contact" activeStyle={ selectedStyle } >[Contact Us]</NavLink>
    </nav>
)

export default MainMenu
