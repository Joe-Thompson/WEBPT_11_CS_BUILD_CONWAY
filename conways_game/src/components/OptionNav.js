import React from 'react';
import logo from '../images/new_landing/nav_logo_two.jpg'

function OptionNav(props) {

    const go_home = (e) => {

    }

    return (
        <div className='option_nav'>
            <a href='#start'>
            <img src={logo}
                 alt='logo'
                 className='nav_logo'
                 onClick={go_home}
            /></a>
            <a href='#random_start'>Spinner</a>
            <a href='#pattern'>Pattern</a>
            <a href='#size'>Size</a>
            <a href='#dead'>Dead</a>
            <a href='#alive'>Alive</a>
            <a href='#create_grid'>Create</a>
        </div>
    )
}

export default OptionNav;