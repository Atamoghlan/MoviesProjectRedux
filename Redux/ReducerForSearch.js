export const initialState = {
    movieList: [],
}

export const ReducerForSearch = (state = initialState, action) => {
    switch(action.type) {
        case 'Search_Movie': 
        return {
            ...state,
            movieList: action.payload.data
        }
    default: 
    return state;
        }
}