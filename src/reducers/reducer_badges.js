import { FETCH_BADGES } from '../actions/index';   

const INITIAL_STATE = { all: [], badge: null };

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_BADGES:
            return { ...state, all: action.payload.data.badges };
        default:
            return state;
    }
}