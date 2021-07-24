
import { handleActions } from 'redux-actions';
import { loader, setData } from '../actions/getData';

const defaultState = {
    data: [],
    loader:false
}
const getDataReduer = handleActions({
    [loader]: (state, action) => ({
        ...state,
        loader : action?.payload
    }),
    [setData]: (state, action) => ({
        ...state,
        data : action?.payload
    }),
}, defaultState);

export default getDataReduer;