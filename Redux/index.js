import { combineReducers } from 'redux'
import { ReducerForSearch } from './ReducerForSearch';
import { ReducerForFavourite } from './ReducerForFavourite';
export const reducer = combineReducers(ReducerForSearch,ReducerForFavourite)