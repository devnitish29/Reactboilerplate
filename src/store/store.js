import { createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const middlewares = [];
const config = {
    key: 'root',
    storage,
}
let reducer = persistCombineReducers(config, { rootReducer });  
middlewares.push(thunk);

if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
}
const storeFactory = createStore( reducer, {
    "login": {},
    "apistatus": {
        "progress": false,
        "error": false,
        "message": null
    } 
} ,  (process.env.NODE_ENV === 'development') ? composeWithDevTools(applyMiddleware(...middlewares)) : compose(applyMiddleware(...middlewares)));

export default storeFactory;