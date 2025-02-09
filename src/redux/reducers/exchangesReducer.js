import {GET_EXCHANGES} from '../actionTypes';

const InitiateState = {
    exchangesList: [],
    loading: true
}

const exchangesReducer = (state = InitiateState, action) =>{
    switch (action.type) {
        case GET_EXCHANGES:
            return {
                exchangesList: action.payload,
                loading:false,
            }
        default:
            return state
    }
}

export default exchangesReducer;