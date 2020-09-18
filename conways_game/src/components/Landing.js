import React, { useState } from 'react';
import { connect } from "react-redux";


function Landing() {

    const [grid_data, setGrid_data] = useState({
        rows: 0,
        cols: 0,
         bg_color: 'white',
         accent_color: 'black',
         preset_grid: 'none',
    });

    const change_handler = (e) => {
        setGrid_data({
            ...grid_data,
            [e.target.name]: e.target.value
        })

    };

    const submit_handler = (e) => {
        e.preventDefault()
        console.log(grid_data)
    }

    const colors = [
        'black',
        'white',
        'teal',
        'cadetblue',
        'coral',
        'crimson',
        'forestgreen',
        'darkorchid',
        'hotpink',
        'indigo',
        'dodgerblue',
        'salmon'
    ]

    return (
        <> #TODO create a sorta nav bar for presets, create your own, or completely random
            <form onSubmit={submit_handler}>
                <section className='choices' id='first_option'>
                    <div className='grid_section'>
                        <span className='grid_row'>
                            <label className='grid_label' htmlFor='rows'>Number of Rows</label>
                            <input className='grid_input'
                                   type='number'
                                   min='10'
                                   max='100'
                                   onChange={change_handler}
                                   name='rows'/>
                        </span>
                        <span className='grid_x'>X</span>
                        <span className='grid_col'>
                            <label className='grid_label' htmlFor='cols'>Number of Columns</label>
                            <input className='grid_input'
                                   type='number'
                                   min='10'
                                   max='100'
                                   onChange={change_handler}
                                   name='cols'/>
                        </span>
                    </div>
                    <p className='size_range'>choose your grid size (10 - 100)</p>
                    <a className='btn_links' href='#second_option'>continue</a>
                    <p className='size_range'>or choose random</p>
                    <a className='btn_links' href='#second_option'>Random</a>
                </section>

                <section className='choices'>
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
                    <p className='color_title'>Choose a background color for your grid</p>
                    <a className='btn_links' href='#third_option'>Next</a>
                </section>

                <section className='choices'>
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
                    <p className='color_title'>Choose an accent color for your grid</p>
                    <button type='submit' className='btn_links'><a href='#third_option'></a>Create your Grid</button>
                </section>
            </form>
        </>
    )
}

const mapDispatchToProps = {

};

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)