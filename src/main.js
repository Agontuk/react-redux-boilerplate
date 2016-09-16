import React from 'react';
import { render } from 'react-dom';
import Counter from './containers/counter';
import store from './store';
import { Provider } from 'react-redux';

render(
    <Provider store={ store }>
        <Counter />
    </Provider>,
    document.getElementById('root')
);
