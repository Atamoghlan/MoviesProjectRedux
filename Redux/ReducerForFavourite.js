export const initialState = {
    movieList: [],
}

export const ReducerForFavourite = (state = initialState, action) => {
    switch(action.type) {
        
        case 'Add_to_favourite_List':
            return {
                userList: [...state.userList, action.payload]
            }
    default: 
    return state;
        }
}