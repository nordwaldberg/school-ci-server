import {applyMiddleware, combineReducers, createStore} from 'redux';
import settingsReducer from './reducers/settings-reducer';
import {buildsReducer} from './reducers/builds-reducer';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    settings: settingsReducer,
    builds: buildsReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
