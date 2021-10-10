import {getSettingsFromLocalStorage, saveSettingsToLocalStorage} from '../helpers';


const defaultState = getSettingsFromLocalStorage();

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