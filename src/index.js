import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {compose, createStore} from "redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainReducer from './reducers/MainReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
