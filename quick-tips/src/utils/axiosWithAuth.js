import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    return axios.create({ 
        headers: {
            authorization: token
        },
        baseURL: 'https://lambda-how-to-api.herokuapp.com/'}) //check
}