import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/index";
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
