import { combineReducers } from 'redux';
import getDataReducer from '../reducers/getDataReducer';
import contactReducer from './contactReducer';
import themeReducer from './themeReducer';

const staticReducers = {
    root: getDataReducer,
    contact: contactReducer,
    isThemeLight: themeReducer
};

const rootReducer = combineReducers({
    ...staticReducers
});

export default rootReducer;