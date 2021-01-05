import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createStore, applyMiddleware, compose}  from 'redux';
import { Provider } from 'react-redux';
import {reducer} from './Redux/store';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { logger } from 'redux-logger';
import  createSagaMiddleware  from "redux-saga";
import { watchFetchUrl } from "./Redux/sagas";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, reducer)
const sagaMiddleware = createSagaMiddleware()
export const mystore = createStore(persistedReducer, applyMiddleware(logger, sagaMiddleware));
export const mypersistor = persistStore(mystore)
sagaMiddleware.run(watchFetchUrl)

const MyEntryPoint = () => (
    <Provider store={mystore}>
        <PersistGate loading={null} persistor={mypersistor}>
            <App/>
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => MyEntryPoint);
