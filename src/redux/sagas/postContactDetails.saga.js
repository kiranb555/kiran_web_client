import {
    takeEvery, put, call, select, delay
} from 'redux-saga/effects';
import postContactDetails from '../../services/postContactDetails';
import { formLoader, formReset, formSubmit, formSubmittedSuccessfully } from '../actions/contactActions';

export function* watchContactDetailsSubmit(action) {
    try {
         yield put(formLoader(true));
        const { formData } = yield select(state => state.contact);
        yield call(
            postContactDetails,
            '/contactedList',
            formData
        );
        yield put(formLoader(false));
        yield put(formSubmittedSuccessfully(true));
    }
    catch (error) {
         yield put(formLoader(false));
    }
    finally {
        yield put(formReset());
        yield delay(3000);
        yield put(formSubmittedSuccessfully(false));
    }
    
}

export default function* postContactFormData() {
    yield takeEvery(formSubmit,watchContactDetailsSubmit)
}