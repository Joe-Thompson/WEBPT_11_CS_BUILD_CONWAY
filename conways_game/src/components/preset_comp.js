import React, { useState } from 'react';
import {setting_up_grid} from "../actions/grid_actions";
import {connect} from "react-redux";

function Preset_Comp({ setting_up_grid, history }) {

    const [preset, setPreset] = useState({
        name: "",
        option: false
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
        <div>
            <form onSubmit={submit_handler}>
            <label htmlFor='name'>Gospers Glider Gun</label>
            <input onClick={change_handler} type='radio' name='name' value='glider'/>
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

