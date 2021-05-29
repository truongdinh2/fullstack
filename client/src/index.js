import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import 'antd/dist/antd.css';
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))