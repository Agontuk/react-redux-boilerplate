import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const dom = document.getElementById('root');
const render = (Component) => {
    if (process.env.NODE_ENV === 'production') {
        ReactDOM.render(<Component />, dom);
    } else {
        // eslint-disable-next-line global-require
        const AppContainer = require('react-hot-loader').AppContainer;
        ReactDOM.render(
            <AppContainer>
                <Component />
            </AppContainer>,
            dom
        );
    }
};

render(App);

if (module.hot) {
    module.hot.accept('./app', () => {
        render(App);
    });
}
