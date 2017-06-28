import axios from 'axios';
import { browserHistory } from 'react-router';

//Using for posts
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

//Using for weather
export const FETCH_WEATHER = 'FETCH_WEATHER';

//Using for authenticate
import { 
    CHANGE_AUTH, 
    FETCH_USERS,
    AUTH_USER, 
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE 
} from './types';

//Using for Wonolo
export const FETCH_BADGES = 'FETCH_BADGES';
export const FETCH_POS = 'FETCH_POS';
export const FETCH_JOB_REQUESTS = 'FETCH_JOB_REQUESTS';
export const FETCH_JOB_REQUEST = 'FETCH_JOB_REQUEST';


const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=abdef';

const WEATHER_API_KEY = 'c2f8bf1f271b8ff9423f89b3a9c35bbf';
const WEATHER_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

const SERVER_ROOT_URL = 'https://tranquil-peak-63988.herokuapp.com';

const WONOLO_TOKEN = 'YeCB3iU9ZxVYbKqJxB4z';

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return{
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchBadges(){
    
    const request = axios.get(`https://api-test.wonolo.com/api_v2/badges?token=${WONOLO_TOKEN}`);
    return{
        type: FETCH_BADGES,
        payload: request
    };
}

// export function fetchPos(position){
//     debugger;
//     return{
//         type: FETCH_POS,
//         payload: { lat: position.data.latitude, lon: position.data.longitude  },
//     };
// }

export function fetchJobRequests(){
    const request = axios.get(`https://api-test.wonolo.com/api_v2/job_requests?token=${WONOLO_TOKEN}`);
    
    return{
        type: FETCH_JOB_REQUESTS,
        payload: request
    };
}

export function fetchJobRequest(id){
    const request = axios.get(`https://api-test.wonolo.com/api_v2/job_requests/${id}?token=${WONOLO_TOKEN}`);

    return{
        type: FETCH_JOB_REQUEST,
        payload: request
    }
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return{
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return{
        type: DELETE_POST,
        payload: request
    };
}

export function authenticate(isLoggedIn){
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}

export function fetchWeather(city){
    const url = `${WEATHER_ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}

export function fetchUsers(){
    const request = axios.get('https://jsonplaceholder.typicode.com/users');

    return {
        type: FETCH_USERS,
        payload: request
    }
}

export function signinUser({ email, password }){
    return function(dispatch){
        
        //Submit email/password to the server
        axios.post(`${SERVER_ROOT_URL}/signin`, { email, password })
            .then(response => {
                //If request is good...
                //- Update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });
                //- Save the JWT token
                localStorage.setItem('token', response.data.token);
                //- redirect to the route '/feature'
                browserHistory.push('/feature');
            })
            .catch(error => {
                //If request is bad...
                // - Show an error to the user
                dispatch(authError('Bad Login Info'));
            });
    }

}

export function signupUser({email, password }){
    return function (dispatch){
        console.log('abcd');
        axios.post(`${SERVER_ROOT_URL}/signup`, {email, password})
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature');
            })
            .catch(message => {
                debugger;
                dispatch(authError(message.response.data.error))
            });
    }

}

export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser(){
    localStorage.removeItem('token');

    return { type: UNAUTH_USER };
}

export function fetchMessage(){
    return function(dispatch){
        axios.get(SERVER_ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(response =>{
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            });
        });
    }
}