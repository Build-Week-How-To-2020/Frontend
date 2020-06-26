import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_REVIEW = 'ADD_REVIEW';
export const REVIEW_ADDED = 'REVIEW_ADDED';
export const REVIEW_FAIL = 'REVIEW_FAIL';

export const ADD_HOW_TO = 'ADD_HOW_TO';
export const HOW_TO_SUCCESS = 'HOW_TO_SUCCESS';
export const HOW_TO_FAIL    = 'HOW_TO_FAIL';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';


export const login = state => dispatch => {
    dispatch({type: LOGIN_START});
    return axiosWithAuth()
    .post('https://lambda-how-to-api.herokuapp.com/users/login', state) //double-check endpoint
    .then(res => {
localStorage.setItem('token', res.data)
dispatch({type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
        localStorage.removeItem('token');
        console.log('invalid login', err) //add alert?
    })
}

export const signup = state => dispatch => {
dispatch({type: SIGNUP_START});
return axios 
.post('https://lambda-how-to-api.herokuapp.com/users/register', state)
.then(res => {
    // add console.log
    localStorage.setItem('token', res.data);

    dispatch({type: SIGNUP_SUCCESS, payload: res.data})
})
.catch(err => console.log('error', err.response)
    )
}



export const getHowtos = () => (dispatch) => {
    dispatch({type:START_FETCHING})
    axios.get('https://lambda-how-to-api.herokuapp.com/')
    .then((res) => dispatch({
     type: 'FETCH_SUCCESS', payload:res.data,
    }))
    .catch((err)=> dispatch({
        type:FETCH_FAILURE,
        payload:err.response
    }))
}

export const addReview = (review) => (dispatch) => {
    dispatch({type: ADD_REVIEW})
    axios.post('tempURL', review)
    .then((res)=> {
        dispatch({
            type: REVIEW_ADDED, payload: res.data
        })
    })
    .catch((error)=> {
        dispatch({type: REVIEW_FAIL, payload: error.response})
    })
}


// export const FetchReviews = () => (dispatch) => {
//     dispatch({type:START_FETCHING})
//     axios.get('fakeURL')
//     .then((res) => dispatch({
//      type: 'FETCH_SUCCESS', payload:res.data
//     }))
//     .catch((err)=> dispatch({
//         type:FETCH_FAILURE,
//         payload:err.response
//     }))
// }

// export const addReview = (review) => (dispatch) => {
//     dispatch({type: ADD_REVIEW})
//     axios.post('tempURL', review)
//     .then((res)=> {
//         dispatch({
//             type: REVIEW_ADDED, payload: res.data
//         })
//     })
//     .catch((error)=> {
//         dispatch({type: REVIEW_FAIL, payload: error.response})
//     })
// }