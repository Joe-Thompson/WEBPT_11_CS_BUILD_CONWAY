import React from 'react';
import conway from '../images/research/conway-prism.jpg'

function About() {
    return (
        <div>
            <img className='title_photo' src={conway} alt='John Conway' />
        </div>
    )
}

export default About;