import React from 'react';
import title from '../images/research/game_of_life.jpeg'

function Title(props) {
    console.log(props)
    return (
        <div className='title_container'>
            <img className='title_photo' src={title} alt='title block' />
            <div>
                <p className='size_range'>Click continue to begin building your grid</p>
                <a className='btn_links' href='#start'>Continue</a>
            </div>
        </div>
    )
}

export default Title