import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {
    return (
        <nav>
            <ul>
                {/* For later: Render proper link when logged in or out by checking local storage for token*/}
                <li><NavLink activeClassName='' to='/loginpage'>Login/Logout</NavLink></li>
                <li><NavLink activeClassName='' to='/signuppage'>Sign up</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;