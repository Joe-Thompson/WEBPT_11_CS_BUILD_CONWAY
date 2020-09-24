import React, { useState } from 'react';
import {setting_up_grid} from "../actions/grid_actions";
import {connect} from "react-redux";
import gosper from '../images/preset_photos/gosper.png';
import diagonal from '../images/preset_photos/diagonal.png';
import norman from '../images/preset_photos/norman.png';
import chess from '../images/preset_photos/chess.png';
function Preset_Comp({ setting_up_grid, history }) {

    const [preset, setPreset] = useState({
        name: "",
        option: false,
        window_size: window.screen.width
    })

    const change_handler = (e) => {
        setPreset({
            ...preset,
            [e.target.name]: e.target.value,
            option: true
        })
    }

    const submit_handler = (e) => {
        e.preventDefault();
        setting_up_grid(preset)
        history.push('/dashboard')
    }
    return (
        <div className='preset_container'>
            <h2>Try a preset grid simulation</h2>
            <form className='preset_form' onSubmit={submit_handler}>
                <div className='preset_option'>
                    <img src={gosper} alt='glider_gun' />
                    <label htmlFor='name'>Gospers Glider Gun</label>
                    <input onClick={change_handler} type='radio' name='name' value='glider'/>
                </div>
                <div className='preset_option'>
                    <img src={diagonal} alt='diagonal' />
                    <label htmlFor='name'>Every Other</label>
                    <input onClick={change_handler} type='radio' name='name' value='diagonal'/>
                </div>
                <div className='preset_option'>
                    <img src={norman} alt='norman' />
                    <label htmlFor='name'>Meet Norman</label>
                    <input onClick={change_handler} type='radio' name='name' value='norman'/>
                </div>
                <div className='preset_option'>
                    <img src={chess} alt='chess' />
                    <label htmlFor='name'>This is chess, not checkers</label>
                    <input onClick={change_handler} type='radio' name='name' value='chess'/>
                </div>
                <button className='btn_links' type='submit'>Create grid</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    setting_up_grid
};

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preset_Comp)

