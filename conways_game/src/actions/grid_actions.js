import glider from '../components/presets/presets';
import mini_glider from '../components/presets/presets';
import diagonal from "../components/presets/presets";
import norman from '../components/presets/presets';
import mini_norman from '../components/presets/presets';
import chess from '../components/presets/presets';
export const SETTING_GRID_PROPERTIES = 'SETTING_GRID_PROPERTIES';
export const SETTING_RANDOM_GRID = 'SETTING_RANDOM_GRID';
export const SETTING_PRESET_GRID = 'SETTING_PRESET_GRID';


export function setting_up_grid(data) {
    console.log(`this is the data in the action line 4: ${data}`)
    console.log(data)
    return dispatch => {
            let grid_data_preset
            if (data.option) {
                if (data.name === "glider") {
                    if (data.window_size < 501) {
                        grid_data_preset = mini_glider.mini_glider
                    } else {
                    grid_data_preset = glider.glider
                }}
                if (data.name === "diagonal") {
                    grid_data_preset = diagonal.diagonal
                }
                if (data.name === "norman") {
                    if (data.window_size < 501) {
                        grid_data_preset = mini_norman.mini_norman
                    } else {
                    grid_data_preset = norman.norman
                }}
                if (data.name === 'chess') {
                    grid_data_preset = chess.chess
                }

                const data_grid = {
                    name: data.name,
                    bg_color: 'white',
                    accent_color: 'black',
                    option: data.option,
                    preset_grid_data: grid_data_preset
                }
                console.log('past first dispatch')
                dispatch({ type: SETTING_PRESET_GRID, payload: {
                    data_grid
                    }})
                return
            }
            if (data.random_size === 'true') {
                if (data.window_size <= 500) {
                    data.rows = Math.floor(Math.random() * 15) + 10;
                    data.cols = Math.floor(Math.random() * 15) + 10;
                }
                else if (data.window_size <= 800) {
                    data.rows = Math.floor(Math.random() * 30) + 10;
                    data.cols = Math.floor(Math.random() * 30) + 10;
                } else {
                data.rows = Math.floor(Math.random() * 50) + 10;
                data.cols = Math.floor(Math.random() * 50) + 10;
            }}
            if (data.random_grid === 'true') {
                dispatch({ type: SETTING_RANDOM_GRID, payload: {
                    data
                    }})
            } else {
            if (data.rows < 10) {
                data.rows = 10
            }
            if (data.cols < 10) {
                data.cols = 10
            }
            if (data.window_size <= 500 && data.cols > 26) {
                data.cols = 25
            }
            if (data.window_size <= 800 && data.cols > 40) {
                data.cols = 40
            }
            console.log('past second dispatch')
            dispatch({ type: SETTING_GRID_PROPERTIES, payload: {
            data
            }}
        )}
    }
}