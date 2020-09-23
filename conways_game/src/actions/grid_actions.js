import glider from '../components/presets/presets';
export const SETTING_GRID_PROPERTIES = 'SETTING_GRID_PROPERTIES';
export const SETTING_RANDOM_GRID = 'SETTING_RANDOM_GRID';
export const SETTING_PRESET_GRID = 'SETTING_PRESET_GRID';


export function setting_up_grid(data) {
    console.log(`this is the data in the action line 4: ${data}`)
    console.log(data)
    return dispatch => {

            if (data.preset_grid_data) {

                const data_grid = {
                    name: data.name,
                    bg_color: 'white',
                    accent_color: 'black',
                    option: data.option,
                    preset_grid_data: data.preset_grid_data
                }
                console.log('this is the preset_data on line 14 actions')
                // console.log(preset_data)
                dispatch({ type: SETTING_PRESET_GRID, payload: {
                    data_grid
                    }})
                return
            }
            if (data.random_size === 'true') {
                data.rows = Math.floor(Math.random() * 50) + 10;
                data.cols = Math.floor(Math.random() * 50) + 10;
            }
            if (data.random_grid === 'true') {
                dispatch({ type: SETTING_RANDOM_GRID, payload: {
                    data
                    }})
            }
            if (data.rows < 10) {
                data.rows = 10
            }
            if (data.cols < 10) {
                data.cols = 10
            }
            dispatch({ type: SETTING_GRID_PROPERTIES, payload: {
            data
            }}
        )
    }
}