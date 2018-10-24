import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom';
import{createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import authReducer from './Store/Reducers/Auth';
import playerReducer from './Store/Reducers/Player';
import musicReducer from './Store/Reducers/Music'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers(
    {
        auth:authReducer,
        player:playerReducer,
        music:musicReducer
    }
);

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app=(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
