import { combineReducers } from 'redux'
import { ReducerForSearch } from './ReducerForSearch';
import { ReducerForFavourite } from './ReducerForFavourite';
const reducer = combineReducers({ReducerForSearch, ReducerForFavourite})

export default reducer