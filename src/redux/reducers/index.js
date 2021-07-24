import { combineReducers } from 'redux';
import getDataReducer from '../reducers/getDataReducer';
import contactReducer from './contactReducer';

const staticReducers = {
    root: getDataReducer,
    contact: contactReducer
};

const rootReducer = combineReducers({
    ...staticReducers
});

export default rootReducer;