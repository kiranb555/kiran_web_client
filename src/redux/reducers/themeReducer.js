import { handleActions } from 'redux-actions';
import { getLocalStorage } from '../../utilities/localstorage';
import { setTheme } from '../actions/themeAction';

const theme = getLocalStorage({ key: 'theme' })
    || new Date().getHours() > 18 ? false : true;
 // setting default theme based on localstorage or current time

const localStorageThemeValue = theme === 'light' ? true : false;
const defaultState = localStorageThemeValue;

const themeReduer = handleActions({
    [setTheme]: (state, action) => {
        return !state
    }
}, defaultState);

export default themeReduer;