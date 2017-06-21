import { FETCH_JOB_REQUESTS, FETCH_JOB_REQUEST } from '../actions/index';   

const INITIAL_STATE = { all: [], jobrequest: null };

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_JOB_REQUESTS:
            return { ...state, all: action.payload.data.job_requests };
        case FETCH_JOB_REQUEST:
            return { ...state, jobrequest: action.payload.data.job_request};
        default:
            return state;
    }
}