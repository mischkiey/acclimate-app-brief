import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {
    return (
        <nav>
            <ul>
                <li><NavLink activeClassName='' to='/login'>Log in</NavLink></li>
                <li><NavLink activeClassName='' to='/signup'>Sign up</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;