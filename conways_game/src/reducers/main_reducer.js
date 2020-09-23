import { SETTING_GRID_PROPERTIES,
         SETTING_RANDOM_GRID,
         SETTING_PRESET_GRID
} from '../actions/grid_actions';


const initial_state = {
    rows: 25,
    cols: 25,
    bg_color: 'white',
    accent_color: 'black',
    preset_grid: false,
    random_grid: false,
    random_size: false,
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
                accent_color: action.payload.data.accent_color
            };
        case SETTING_RANDOM_GRID:
            return {
                ...state,
                rows: action.payload.data.rows,
                cols: action.payload.data.cols,
                bg_color: action.payload.data.bg_color,
                accent_color: action.payload.data.accent_color,
                random_grid: true
            }
        case SETTING_PRESET_GRID:
            return {
                ...state,
                preset_grid: action.payload.preset_data.option,
                preset_name: action.payload.preset_data.name,
                bg_color: action.payload.preset_data.bg_color,
                accent_color: action.payload.preset_data.accent_color,
                rows: action.payload.preset_data.rows,
                cols: action.payload.preset_data.cols
            }
        default:
            return state
    }
}