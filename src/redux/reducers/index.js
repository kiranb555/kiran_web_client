import { combineReducers } from 'redux';
import getDataReducer from '../reducers/getDataReducer';
import contactReducer from './contactReducer';
import themeReducer from './themeReducer';
import blogFormReducer from './blogFormReducer';
import getBlogDataReduer from '../reducers/getBlogReducer';

const staticReducers = {
    root: getDataReducer,
    contact: contactReducer,
    isThemeLight: themeReducer,
    blogform: blogFormReducer,
    blogData: getBlogDataReduer
};

const rootReducer = combineReducers({
    ...staticReducers
});

export default rootReducer;