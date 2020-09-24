import React, { useState } from 'react';
import { connect } from "react-redux";
import { setting_up_grid } from '../actions/grid_actions';


function Landing({ setting_up_grid, history }) {

    const [grid_data, setGrid_data] = useState({
         rows: 0,
         cols: 0,
         bg_color: 'black',
         accent_color: 'white',
         preset_grid: false,
        random_grid: false
    });

    const change_handler = (e) => {
        setGrid_data({
            ...grid_data,
            [e.target.name]: e.target.value
        })

    };


    const submit_handler = (e) => {
        console.log('this is the data in the submit handler')
        console.log(grid_data)
        e.preventDefault()
        setting_up_grid(grid_data)
        history.push('/dashboard')
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
        <>
            <form onSubmit={submit_handler}>
                <section className='choices grid_choice_bg' id='start'>
                    <div className='grid_empty'>
                        <span className='grid_random'>
                            <label className='grid_label' htmlFor='rows'>Empty Grid</label>
                            <input className='grid_input'
                                   type='radio'
                                   onChange={change_handler}
                                   name='random_grid'
                                   value={false}/>
                        </span>
                        <span className='grid_or'>or</span>
                        <span className='grid_random'>
                            <p className='size_range'>Start by choosing an empty grid, or a random initial state</p>
                            <input className='grid_input'
                                   type='radio'
                                   onChange={change_handler}
                                   name='random_grid'
                                   value={true}/>
                            <label className='grid_label' htmlFor='cols'>Random Grid</label>
                        </span>
                    </div>
                    <p className='size_range'>continue on to choose your number of rows and columns</p>
                    <a className='btn_links' href='#first_option'>continue</a>
                </section>
                <section className='choices grid_size_bg' id='first_option'>
                    <p className='size_range size_title'>Choose your grid dimensions, or allow us to build it for you</p>
                    <div className='grid_section'>
                        <span className='grid_row'>
                            <label className='grid_label' htmlFor='rows'>Number of Rows</label>
                            <input className='grid_input'
                                   type='number'
                                   min='10'
                                   max='50'
                                   onChange={change_handler}
                                   name='rows'/>
                        </span>
                        <span className='grid_x'>X</span>
                        <span className='grid_col'>
                            <label className='grid_label' htmlFor='cols'>Number of Columns</label>
                            <input className='grid_input'
                                   type='number'
                                   min='10'
                                   max='50'
                                   onChange={change_handler}
                                   name='cols'/>
                        </span>
                    </div>
                    <p className='size_range'>choose your grid size (10 - 50)</p>
                    <a className='btn_links' href='#second_option'>continue</a>
                    <p className='size_range'>or choose random</p>
                    <input onChange={change_handler}
                            type='radio'
                            name='random_size'
                            value={true}
                            className='btn_links'
                            />
                </section>

                <section className='choices grid_color_bg'>
                    <div className='color_section'>
                        {colors.map((item, index) => {
                            return (
                                <div id='second_option' className='color_choice' key={index}>
                                    <label className={`${item} box`} htmlFor='bg_color'></label>
                                    <input className='radio_btn'
                                           type='radio'
                                           name='bg_color'
                                           onClick={change_handler}
                                           value={item}/>
                                </div>
                            )
                        })}
                    </div>
                    <p className='color_title'>Choose a background color for your grid (dead cells)</p>
                    <a className='btn_links' href='#third_option'>Next</a>
                </section>

                <section className='choices grid_color_accent'>
                        <div className='color_section'>
                        {colors.map((item, index) => {
                            return (
                                <div id='third_option' className='color_choice' key={index}>
                                    <label className={`${item} box`} htmlFor='accent_color'></label>
                                    <input className='radio_btn'
                                           type='radio'
                                           name='accent_color'
                                           onClick={change_handler}
                                           value={item}/>
                                </div>
                            )
                        })}
                    </div>
                    <p className='color_title'>Choose an accent color for your grid (alive cells)</p>
                    <button type='submit' className='btn_links'><a href='#third_option'>Create your Grid</a></button>
                </section>
            </form>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing)