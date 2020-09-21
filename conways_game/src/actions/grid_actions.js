export const SETTING_GRID_PROPERTIES = 'SETTING_GRID_PROPERTIES';
export const SETTING_RANDOM_GRID = 'SETTING_RANDOM_GRID';
export const SETTING_PRESET_GRID = 'SETTING_PRESET_GRID';

export function setting_up_grid(data) {
    console.log(`this is the data in the action line 4: ${data}`)
    console.log(data)
    return dispatch => {
        try {
            if (data.option === true) {
                dispatch({ type: SETTING_PRESET_GRID, payload: {
                    data
                    }})
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
            }})
        } catch (e) {
            return e
        }
    }
}