import React, { useState } from 'react';
import {setting_up_grid} from "../actions/grid_actions";
import {connect} from "react-redux";
import glider from '../components/presets/presets';
import diagonal from '../components/presets/presets'

function Preset_Comp({ setting_up_grid, history }) {
    console.log(diagonal.diagonal)
    const glider_grid = glider.glider
    const diagonal_grid = diagonal.diagonal

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

    function handle_grid_data() {
        console.log('hello from handle function')
            console.log(preset.name)
        if (preset.name === "glider") {
            setPreset({
                ...preset,
                preset_grid_data: glider
            })
        }
        if (preset.name === "diagonal") {
            setPreset({
                ...preset,
                preset_grid_data: diagonal
            })
            return preset
        }}

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

