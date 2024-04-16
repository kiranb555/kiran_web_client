import {
    takeEvery, put, call, select, delay
} from 'redux-saga/effects';
import postContactDetails from '../../services/postContactDetails';
import { blogFormLoader, blogFormReset, blogFormSubmit, blogFormSubmittedSuccessfully } from '../actions/blogActions';

export function* watchContactDetailsSubmit(action) {
    try {
         yield put(blogFormLoader(true));
        const { formData } = yield select(state => state.blogform);
        yield call(
            postContactDetails,
            '/addblog',
            formData
        );
        yield put(blogFormLoader(false));
        yield put(blogFormSubmittedSuccessfully(true));
    }
    catch (error) {
         yield put(blogFormLoader(false));
    }
    finally {
        yield put(blogFormReset());
        yield delay(3000);
        yield put(blogFormSubmittedSuccessfully(false));
    }
    
}

export default function* postBlogFormDetails() {
  yield takeEvery(blogFormSubmit, watchContactDetailsSubmit);
}
