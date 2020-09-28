import React, { useState } from 'react';
import { connect } from "react-redux";
import { setting_up_grid } from '../actions/grid_actions';
import OptionNav from "./OptionNav";
import spinner from '../images/new_landing/spinner.png';
import family_gif from '../images/new_landing/family_gif.gif'
import CreatNav from "./CreateNav";


function New_Landing({ setting_up_grid, history, location }) {

    const [grid_data, setGrid_data] = useState({
        rows: 0,
        cols: 0,
        bg_color: 'black',
        accent_color: 'white',
        preset_grid: false,
        random_grid: false,
        random_size: false,
        window_size: window.screen.width
    });

    const change_handler = (e) => {
        if (e.target.name === 'rows' || e.target.name === 'cols') {
            setGrid_data({
                ...grid_data,
                [e.target.name]: Number(e.target.value)
            })
        } else {
            setGrid_data({
                ...grid_data,
                [e.target.name]: e.target.value
            })}

    };

    const submit_handler = (e) => {
        e.preventDefault()
        setting_up_grid(grid_data)
        history.push('/dashboard')
    }

    const random_build_handler = (e) => {
        e.preventDefault();
        const data = {
            rows: 25,
            cols: 25,
            bg_color: 'white',
            accent_color: 'black',
            preset_grid: false,
            random_grid: false,
            window_size: window.screen.width
        }
        setting_up_grid(data)
        setTimeout(() => {
            history.push('/dashboard')
        }, 3000)
    }

    const colors = [
        'black',
        'white',
        'teal',
        'coral',
        'forestgreen',
        'darkorchid',
        'indigo',
        'dodgerblue'
    ]

    return (
        <div className='new_landing_container'>
            <form className='new_landing_form' onSubmit={submit_handler}>
                <div className='start_option' id='start' >
                    <div className='new_option new_landing_pattern'>
                        <p>Choose to start with an empty grid or a random pattern</p>
                        <a href='#pattern'><ion-icon name="swap-horizontal-outline"></ion-icon></a>
                    </div>
                    <div className='new_option new_landing_size'>
                        <p>Choose your grid dimensions or allow us to build one for you</p>
                        <a href='#size'><ion-icon name="swap-horizontal-outline"></ion-icon></a>
                    </div>
                    <div className='new_option new_landing_color'>
                        <p>Choose the color of your inactive or "dead" cells</p>
                        <a href='#dead'><ion-icon name="swap-horizontal-outline"></ion-icon></a>
                    </div>
                    <div className='new_option new_landing_color2'>
                        <p>Choose the color of your active or "living" cells</p>
                        <a href='#alive'><ion-icon name="swap-horizontal-outline"></ion-icon></a>
                    </div>
                </div>
                <div className='start_option random_settings' id='random_start'>
                    <p>Click on the spinner for random grid settings</p>
                    <img
                         onClick={(e) => {
                             setGrid_data({
                                 ...grid_data,
                                 random_size: 'true',
                                 random_grid: 'true',
                             })
                            random_build_handler(e)
                         }}
                         className={grid_data.random_grid ? 'spinning' : 'spun'}
                         src={spinner}
                         alt='spinner'
                    />
                    <a className='btn_links' href='#start'>or go back to build settings</a>
                </div>
                <section className='new_landing_section section_pattern' id='pattern'>
                    <div className='pattern_container'>
                        <div className='pattern_choice pattern_empty'>
                            <label htmlFor='rows'>Empty Grid</label>
                            <ion-icon onClick={() => {
                                setGrid_data({
                                    ...grid_data,
                                    random_grid: 'false'
                                })
                            }} name="close-outline"></ion-icon>
                        </div>
                        <p className='new_landing_or'>or</p>
                        <div className='pattern_choice pattern_random'>
                            <ion-icon onClick={() => {
                                setGrid_data({
                                    ...grid_data,
                                    random_grid: 'true'
                                })
                            }} name="help-circle-outline"></ion-icon>
                            <label htmlFor='cols'>Random Grid</label>
                        </div>
                    </div>
                    <OptionNav />
                </section>
                <section className='new_landing_section size_container' id='size'>
                    <div className='section_size'>
                    <p>Choose your grid size, or allow us to build it for you</p>
                    <div className='size_input'>
                        <div>
                            <label htmlFor='rows'>Number of Rows</label>
                            <input
                                   type='number'
                                   min='10'
                                   max='50'
                                   onChange={change_handler}
                                   placeholder='Number of Rows'
                                   name='rows'/>
                        </div>
                        <div className='new_landing_x'>X</div>
                        <div>
                            <label htmlFor='cols'>Number of Columns</label>
                            <input
                                   type='number'
                                   min={10}
                                   max={50}
                                   onChange={change_handler}
                                   placeholder='Number of Columns'
                                   name='cols'/>
                        </div>
                    </div>
                    <p>choose your grid size (10 - 50)</p>
                    <p>or</p>
                    <p>choose random</p>
                        <ion-icon onClick={() => {
                            setGrid_data({
                                ...grid_data,
                                random_size: 'true'
                            })
                        }} name="help-circle-outline"></ion-icon>
                    </div>
                    <OptionNav />
                </section>

                <section id='dead' className='new_landing_section'>
                    <div className='color_container'>
                    <div className='section_color'>
                        <p>Choose a background color for your grid (dead cells)</p>
                        {colors.map((item, index) => {
                            return (
                                <div id='second_option'  key={index}>
                                    <label className={`${item} box new_landing_box`}
                                           htmlFor='bg_color'
                                           onClick={() => {
                                               setGrid_data({
                                                   ...grid_data,
                                                   bg_color: item
                                               })
                                           }}
                                    ></label>
                                </div>
                            )
                        })}
                    </div>
                    </div>
                    <OptionNav />
                </section>

                <section id='alive' className='new_landing_section'>
                    <div className='color_container'>
                    <div className='section_color'>
                        <p >Choose an accent color for your grid (alive cells)</p>
                        {colors.map((item, index) => {
                            return (
                                <div id='third_option' key={index}>
                                    <label className={`${item} box new_landing_box`}
                                           htmlFor='accent_color'
                                           onClick={() => {
                                               setGrid_data({
                                                   ...grid_data,
                                                   accent_color: item
                                               })
                                           }}
                                    ></label>
                                </div>
                            )
                        })}
                    </div>
                    </div>
                    <OptionNav />
                    <CreatNav />
                    <img src={family_gif} alt='family' className='create_photo' />
                    <button className='submit_form_btn' id='create_grid' type='submit'>Create your Grid</button>
                </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(New_Landing)