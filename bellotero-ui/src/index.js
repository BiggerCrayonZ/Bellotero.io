import React from 'react';
import ReactDOM from 'react-dom';
// Redux Provider
import { Provider } from 'react-redux'
import configureStore from './redux/store/store';

import './index.scss';
import App from './AppContainer';


ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>
    , document.getElementById('root'));
