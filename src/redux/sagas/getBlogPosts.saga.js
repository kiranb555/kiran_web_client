import { takeEvery, put, call} from "redux-saga/effects";
import { blogGetData,blogSetData,blogLoader } from "../actions/blogActions";
import getBlogPostData from "../../services/getBlogPostData";

export function* watchGetBlogsData(action) {
  try {
    yield put(blogLoader(true));
    const response = yield call(
        getBlogPostData,
      "/getallblogs"
    );
    // const response = data;
    yield put(blogSetData(response));
  } catch (error) {
    yield put(blogSetData([]));
  } finally {
    yield put(blogLoader(false));
  }
}

export default function* getBlogData() {
  yield takeEvery(blogGetData, watchGetBlogsData);
}
