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
export const favouriteList = (icon, movieName, description) => {
    return ({
        type: 'Add_to_favourite_List',
        payload: {
            movieId: ++movieId,
            icon: icon,
            movieName: movieName,
            description: description
            

        }
    })
}



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