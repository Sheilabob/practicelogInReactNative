import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { goals } from './goals';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            goals
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}