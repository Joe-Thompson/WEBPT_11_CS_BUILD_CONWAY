import React, { useState } from 'react';
import {setting_up_grid} from "../actions/grid_actions";
import {connect} from "react-redux";
import gosper from '../images/preset_photos/gosper.png';
import diagonal from '../images/preset_photos/diagonal.png';
function Preset_Comp({ setting_up_grid, history }) {

    const [preset, setPreset] = useState({
        name: "",
        option: false,
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
            <form className='preset_form' onSubmit={submit_handler}>
                <img src={gosper} alt='glider_gun' />
                <label htmlFor='name'>Gospers Glider Gun</label>
                <input onClick={change_handler} type='radio' name='name' value='glider'/>
                <img src={diagonal} alt='diagonal' />
                <label htmlFor='name'>Diagonal Fun</label>
                <input onClick={change_handler} type='radio' name='name' value='diagonal'/>
            <button type='submit'>Create grid</button>
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

