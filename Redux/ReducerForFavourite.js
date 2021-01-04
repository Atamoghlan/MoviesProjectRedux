export const initialState = {
    movieList: [],
}

export const ReducerForFavourite = (state = initialState, action) => {
    switch (action.type) {

        case 'Add_to_favourite_List':
            return {
                ...state,
                movieList: [...state.movieList, action.payload.movieList]
            }
        case "ClearList":
            return {
                state,
                movieList: []
            }
        case 'DeleteMovie':
            return{ 
                state,
                movieList: state.movieList.filter((item, index) => index !== action.payload)
            }
        default:
            return state;
    }
}