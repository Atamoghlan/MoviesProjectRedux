import {myLogger} from '../App'

let movieId = 0;

export const searchMovie = (data) => {
    return ({
        type: 'Search_Movie',
        payload: {
            data: data
        }
    })
}
export const favouriteList = (movie) => {
    return ({
        type: 'Add_to_favourite_List',
        payload: {
            movieList: {
                icon: movie.image?{uri: movie.image.medium}: require("../images/popcorn.jpg"),
                name: movie.name
            }
        }
    })
}

export const ClearList = () => {
    return ({
    type: "ClearList",
    payload: {
        movieList: {
        }
    }
})};

export const fetchUrl = (dispatch, url, text) => {
    console.log('from fetch url=',url, text)
    return async() => {
    try
    {
        url1=url+text
      console.log('before fetch last call', url1)
      const response = await fetch(url1)
      const data = await response.json()
      dispatch(searchMovie(data))
    }
    catch(e)
    {
     console.log("URL is wrong")
    }
  }
}