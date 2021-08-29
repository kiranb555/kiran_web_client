import {
    takeEvery, put, call, select
} from 'redux-saga/effects';
import postContactDetails from '../../services/postContactDetails';
import { formReset, formSubmit, formSubmitFailure, formSubmitSuccess } from '../actions/contactActions';

export function* watchContactDetailsSubmit(action) {
    try {
        
        const { formData } = yield select(state => state.contact);
        console.log(formData, '------formdata-----')
        yield call(
            postContactDetails,
            '/contactList',
            formData
        );
        yield put(formSubmit(true));
        yield put(formSubmitSuccess());
    }
    catch (error) {
         yield put(formSubmitFailure());
    }
    finally {
        yield put(formReset())
    }
    
}

export default function* postContactFormData() {
    yield takeEvery(formSubmit,watchContactDetailsSubmit)
}