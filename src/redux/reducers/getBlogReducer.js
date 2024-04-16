
import { handleActions } from 'redux-actions';
import { blogLoader, blogSetData } from '../actions/blogActions';

const defaultState = {
    data: [],
    loader:false
}
const getBlogDataReduer = handleActions({
    [blogLoader]: (state, action) => ({
        ...state,
        loader : action?.payload
    }),
    [blogSetData]: (state, action) => ({
        ...state,
        data : action?.payload
    }),
}, defaultState);

export default getBlogDataReduer;