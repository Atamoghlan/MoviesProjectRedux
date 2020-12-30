import { ReducerForSearch } from "./ReducerForSearch";

import { combineReducers } from 'redux'
import { ReducerForFavourite } from '../Redux/ReducerForFavourite';
import { ReducerForSearch } from '../Redux/ReducerForSearch';
export const reducer = combineReducers(ReducerForSearch, ReducerForFavourite)