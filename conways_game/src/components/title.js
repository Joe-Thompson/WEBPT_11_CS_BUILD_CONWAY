import React from 'react';
import title from '../images/research/game_of_life.jpeg'

function Title() {
    return (
        <div className='title_container'>
            <img className='title_photo' src={title} alt='title block' />
            <p className='size_range'>Spin the dial for random settings or choose your own</p>
            <div className='new_landing_title_btns'>
                <a className='btn_links' href='#random_start'>Take a Spin</a>
                <a className='btn_links' href='#start'>Build Your Own</a>
            </div>
        </div>
    )
}

export default Title