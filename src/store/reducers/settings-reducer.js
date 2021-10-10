import {getSettingsFromLocalStorage, saveSettingsToLocalStorage} from '../helpers';
import {defaultSettings} from '../defaults/settings';


const defaultState = getSettingsFromLocalStorage() || defaultSettings;

const settingsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SAVE_SETTINGS':
            const newState = {...state, ...action.payload};
            saveSettingsToLocalStorage(newState);
            return newState;
        default:
            return state;
    }
};

export default settingsReducer;