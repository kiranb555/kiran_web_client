
import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
// import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom/extend-expect';
import Theme from '../styles/Theme';

// global.window = new JSDOM('').window;
// const sagaMiddleware = createSagaMiddleware();
// const fallBack = createStore(createReducers(), preloadedState, applyMiddleware(sagaMiddleware));

const TestComponentWrapper = ({
    children, store, state
}) => {
    store = store || {};
    //     (state
    //     ? createStore(createReducers(), { ...preloadedState, ...state }, applyMiddleware(sagaMiddleware))
    //     : fallBack);
    // sagaMiddleware.run(rootSaga);
    global.window.store = store;
    return (
        <Provider store={ store }>
            <Theme>
                    { children }
            </Theme>
        </Provider>
    );
};

export const customRender = (ui, {
    state,
    store,
    ...options
} = {}) => render(ui, {
    // eslint-disable-next-line react/no-multi-comp
    wrapper: (props) => (
        <TestComponentWrapper
            { ...props }
            state={ state }
            store={ store }
        />
    ),
    options
});

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };