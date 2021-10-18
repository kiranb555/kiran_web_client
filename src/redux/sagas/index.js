import { all, call } from 'redux-saga/effects';
import getInitialData from './getData.saga';
import postContactFormData from './postContactDetails.saga';


export default function* rootSaga() {
    yield all([
        call(getInitialData),
        call(postContactFormData) 
    ]);
}
