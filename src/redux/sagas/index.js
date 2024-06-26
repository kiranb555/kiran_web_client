import { all, call } from 'redux-saga/effects';
import getInitialData from './getData.saga';
import postContactFormData from './postContactDetails.saga';
import getBlogData from './getBlogPosts.saga';
import postBlogFormDetails from './postBlogDetails.saga';

export default function* rootSaga() {
    yield all([
        call(getInitialData),
        call(postContactFormData),
        call(getBlogData),
        call(postBlogFormDetails)
    ]);
}
