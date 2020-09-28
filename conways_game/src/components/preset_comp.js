import React  from 'react';
import {setting_up_grid} from "../actions/grid_actions";
import {connect} from "react-redux";
import gosper from '../images/preset_photos/gosper.png';
import diagonal from '../images/preset_photos/diagonal.png';
import norman from '../images/preset_photos/norman.png';
import chess from '../images/preset_photos/chess.png';
function Preset_Comp({ setting_up_grid, history }) {


    const submit_handler = (data) => {
        setting_up_grid(data)
        history.push('/dashboard')
    }
    return (
        <div className='preset_container'>
            <h2>Try a preset grid simulation</h2>
            <form className='preset_form' onSubmit={submit_handler}>
                <div className='preset_option' >
                    <label htmlFor='name'>Gospers Glider Gun</label>
                    <img src={gosper}
                         alt='glider_gun'
                         onClick={() => {
                           const data = {
                                 name: "glider",
                                 option: true,
                                 window_size: window.screen.width
                             }
                             submit_handler(data)
                         }}
                    />
                </div>
                <div className='preset_option'>
                    <label htmlFor='name'>Every Other</label>
                    <img src={diagonal}
                         alt='diagonal'
                         onClick={() => {
                             const data = {
                                 name: "diagonal",
                                 option: true,
                                 window_size: window.screen.width
                             }
                             submit_handler(data)
                         }}
                    />
                </div>
                <div className='preset_option'>
                    <label htmlFor='name'>Meet Norman</label>
                    <img src={norman}
                         alt='norman'
                         onClick={(e) => {
                             const data = {
                                 name: "norman",
                                 option: true,
                                 window_size: window.screen.width
                             }
                             submit_handler(data)
                         }}
                    />
                </div>
                <div className='preset_option'>
                    <label htmlFor='name'>This is chess, not checkers</label>
                    <img src={chess}
                         alt='chess'
                         onClick={() => {
                             const data = {
                                 name: "chess",
                                 option: true,
                                 window_size: window.screen.width
                             }
                             submit_handler(data)
                         }}
                    />
                </div>
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

