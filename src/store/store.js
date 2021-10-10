import {combineReducers, createStore} from 'redux';
import settingsReducer from './reducers/settings-reducer';


const reducers = combineReducers({
    settings: settingsReducer,
});

export const store = createStore(reducers);
