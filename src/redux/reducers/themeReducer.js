import { handleActions } from 'redux-actions';
import { setTheme } from '../actions/themeAction';

// const theme = new Date().getHours() > 18 ? false : true;
 // setting default theme based on current time

// const localStorageThemeValue = theme === 'light' ? true : false;
const defaultState = true;

const themeReduer = handleActions({
    [setTheme]: (state, action) => {
        return !state
    }
}, defaultState);

export default themeReduer;