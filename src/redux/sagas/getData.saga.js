import {
    takeEvery, put
} from 'redux-saga/effects';
import { getData, loader, setData } from '../actions/getData';
import data from '../../api/data.json';


export function* watchGetInitialData(action) {
    yield put(loader(true));
    yield put(setData(data))
    yield put(loader(false));
}

export default function* getInitialData() {
    yield takeEvery( getData,watchGetInitialData)
}