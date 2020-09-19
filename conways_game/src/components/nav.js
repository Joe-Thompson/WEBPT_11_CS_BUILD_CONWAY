import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className='nav_container'>
            <ul className='nav_links'>
                <Link to='/' className='nav_link'>Home</Link>
                <Link to={'/about'} className='nav_link'>About</Link>
                <Link to='/dashboard' className='nav_link'>Play Game</Link>
            </ul>

        </div>
    )
}

export default Nav