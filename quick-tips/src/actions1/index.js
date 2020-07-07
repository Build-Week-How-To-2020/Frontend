import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const HOW_TO_START = 'HOW_TO_START';
export const HOW_TO_SUCCESS = 'HOW_TO_SUCCESS';
export const HOW_TO_ERROR = 'HOW_TO_ERROR';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR   = 'LOGIN_ERROR';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';

export const EDIT_START = 'EDIT_START';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_ERROR = 'EDIT_ERROR';



export const getHowtos = () => (dispatch) => {
    dispatch({type: FETCH_START})
   return axiosWithAuth()
    .get('https://reqres.in/api/users?page=2')
    .then( res => { 
        console.log(res);
        dispatch({ type: FETCH_SUCCESS, payload:res.data.data,
    })
})
    .catch(err => {
        console.log('get error', err)
        dispatch({type:FETCH_ERROR, payload:err.response
    })
})
}

export const editHowto = (id) => (dispatch) => { //should have second argument
    console.log('id:', id)
    dispatch({type: EDIT_START})
    return axiosWithAuth()
    .put(`https://reqres.in/api/users?page=2`) //url endpoint missing id; reqres doesn't accept
    .then(res => {
        console.log('Expect response: 200', res.data);
        dispatch({type: EDIT_SUCCESS})
    })
    .catch(err => {
        console.log('edit error', err)
        dispatch({type: EDIT_ERROR})
    })
}

export const deleteHowto = (id) => (dispatch) => {
    console.log('id:', id)
    dispatch({type: DELETE_START})
    return axiosWithAuth()
    .delete(`https://reqres.in/api/users?page=2`)//url endpoint missing id; reqres doesn't accept
    .then(res => { 
        
        console.log('Expect response: 204', res.data)
    dispatch({
        type: DELETE_SUCCESS
    })  
    })
    .catch(err => {
        console.log('delete error', err)
        dispatch({type: DELETE_ERROR, payload: err.response})
    })
}

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


// export const FetchReviews = () => (dispatch) => {
//     dispatch({type:START_FETCHING})
//     axios.get('tempURL')
//     .then((res) => dispatch({
//      type: 'FETCH_SUCCESS', payload:res.data
//     }))
//     .catch((err)=> dispatch({
//         type:FETCH_FAILURE,
//         payload:err.response
//     }))
// }
