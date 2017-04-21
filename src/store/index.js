import { applyMiddleware, compose, createStore } from 'redux';
import Reducers from '../reducers';

const middleware = [];

let extension = (next) => next;

if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const logger = require('redux-logger').createLogger();
    middleware.push(logger);
    extension = window.devToolsExtension ? window.devToolsExtension() : extension;
}

const store = createStore(Reducers, {}, compose(applyMiddleware(...middleware), extension));

if (module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        store.replaceReducer(Reducers);
    });
}

export default store;
