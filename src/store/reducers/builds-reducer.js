const defaultState = [];

export const buildsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_BUILDS':
            return [...action.payload];
        default:
            return state;
    }
}