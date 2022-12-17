import { ALL_PRODUCTS , LOGIN_USER } from '../types';

const reducer =  (state , action) => {
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        default:
            return state;
    }
}

export default reducer;