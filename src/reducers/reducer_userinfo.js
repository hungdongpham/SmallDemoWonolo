import { FETCH_POS } from '../actions/index';   

const INITIAL_STATE = { 
        position: {lat: '', long: ''}
};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POS:
            return { ...state, position: action.data };
        default:
            return state;
    }
}