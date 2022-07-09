import { takeEvery, put, call} from "redux-saga/effects";
import { getData, loader, setData } from "../actions/getData";
import getPortfolioAllData from "../../services/getPortfolioAllData";
// import data from '../../api/data.json';

export function* watchGetInitialData(action) {
  try {
    yield put(loader(true));
    const response = yield call(
      getPortfolioAllData,
      "/portfolio?secret=kiranPortfolio"
    );
    // const response = data;
    yield put(setData(response));
  } catch (error) {
    yield put(setData([]));
  } finally {
    yield put(loader(false));
  }
}

export default function* getInitialData() {
  yield takeEvery(getData, watchGetInitialData);
}
