import { SETTING_GRID_PROPERTIES,
         SETTING_RANDOM_GRID,
         SETTING_PRESET_GRID
} from '../actions/grid_actions';


const initial_state = {
    rows: 25,
    cols: 25,
    bg_color: 'black',
    accent_color: 'white',
    random_grid: false,
    random_size: false,
    preset_grid: false,
    preset_grid_data: null,
    preset_name: ""

};

export function Main_Reducer(state = initial_state, action) {
    switch (action.type) {
        case SETTING_GRID_PROPERTIES:
            return {
                ...state,
                rows: action.payload.data.rows,
                cols: action.payload.data.cols,
                bg_color: action.payload.data.bg_color,
                accent_color: action.payload.data.accent_color,
                random_grid: false,
                random_size: false,
                preset_grid: false,
                preset_grid_data: null,
            };
        case SETTING_RANDOM_GRID:
            return {
                ...state,
                rows: action.payload.data.rows,
                cols: action.payload.data.cols,
                bg_color: action.payload.data.bg_color,
                accent_color: action.payload.data.accent_color,
                random_grid: true,
                random_size: true,
                preset_grid: false,
                preset_grid_data: null
            }
        case SETTING_PRESET_GRID:
            return {
                ...state,
                preset_grid: action.payload.data_grid.option,
                preset_name: action.payload.data_grid.name,
                bg_color: action.payload.data_grid.bg_color,
                accent_color: action.payload.data_grid.accent_color,
                rows: action.payload.data_grid.preset_grid_data.length,
                cols: action.payload.data_grid.preset_grid_data[0].length,
                preset_grid_data: action.payload.data_grid.preset_grid_data,
                random_grid: false,
                random_size: false,
            }
        default:
            return state
    }
}