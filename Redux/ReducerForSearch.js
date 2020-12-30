export const initialState = {
    data: [],
}

export const ReducerForSearch = (state = initialState, action) => {
    switch(action.type) {
        case 'Search_Movie': 
        return {
            data: action.payload.data
        }
    default: 
    return state;
        }
}