import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchUrl,FETCH_URL , searchMovie } from "./actions";
import { url, myDefaultSearch } from "../screens.js/MainMenu";
const fetchData = () => {
        try
        {
            let url1=url+myDefaultSearch
            return fetch(url1)
            .then(response => response.json());
        }
        catch(e)
        {
         console.log("URL is wrong")
        }
      }

function* workerSearchMovie() {
   const data = yield call(fetchData)
   yield put(searchMovie(data))
}

export function* watchFetchUrl(){
    yield takeEvery(FETCH_URL , workerSearchMovie)
}