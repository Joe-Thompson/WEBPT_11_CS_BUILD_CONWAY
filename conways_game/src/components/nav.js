import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className='nav_container'>
            <ul className='nav_links'>
                <Link to='/landing' className='nav_link'>Home</Link>
                <Link to='/about' className='nav_link'>About</Link>
                <Link to='/presets' className='nav_link'>Presets</Link>
                <Link to='/dashboard' className='nav_link'>Game</Link>
            </ul>
            {/* container for hamburger menu*/}
            {/*<ul className='ham_menu'>*/}
            {/*    <div className='ham_div'></div>*/}
            {/*    <div className='ham_div'></div>*/}
            {/*    <div className='ham_div'></div>*/}
            {/*</ul>*/}

        </div>
    )
}

export default Nav