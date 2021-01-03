import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createStore, applyMiddleware, compose}  from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './Redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { logger } from 'redux-logger';
import { NavigationContainer } from "@react-navigation/native";
import { MoviesMenu } from "./components/TabNavigator";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, reducer)
export const mystore = createStore(persistedReducer, applyMiddleware(logger, thunk));
export const mypersistor = persistStore(mystore)

const MyEntryPoint = () => (
    <Provider store={mystore}>
        <PersistGate loading={null} persistor={mypersistor}>
            <NavigationContainer>
                <MoviesMenu/>
            </NavigationContainer>
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => MyEntryPoint);
