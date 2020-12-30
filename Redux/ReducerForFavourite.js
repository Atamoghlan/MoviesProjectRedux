export const initialState = {
    data: [],
}

export const ReducerForFavourite = (state = initialState, action) => {
    switch(action.type) {
        
        case 'Add_to_favourite_List':
            return {
                data: [...state, action.payload.data]
            }
    default: 
    return state;
        }
}