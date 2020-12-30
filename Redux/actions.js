import {myLogger} from '../App'

let movieId = 0;

export const searchMovie = (data) => {
    return ({
        type: 'Search_Movie',
        payload: {
            data: []
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