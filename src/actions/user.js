import axios from 'axios';
import { FETCH_NOTES} from './notes';

export const REGISTER = 'REGISTER';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const ERROR_SIGNIN = 'ERROR_SIGNIN';
axios.defaults.withCredentials = true;
axios.default.baseURL = 'https://quiet-fjord-20542.herokuapp.com';

export const register = user => {
    return dispatch => {
        return axios
        .post('/users/register', user)
        .then((response) => {
            dispatch({
                type: REGISTER,
            });
        })
        .catch((error) => console.log(error))};
};
export const signIn = credentials => {
    return dispatch => {
        return axios
        .post('/users/login', credentials, { 'withCredentials': true, 'Access-Control-Allow-Credentials': true })
        .then(() => {
            return axios.get('/notes', { 'withCredentials': true, 'Access-Control-Allow-Credentials': true})
            .then((response) => {
                console.log(response);
                dispatch({ type: SIGNIN })
                dispatch({ type: FETCH_NOTES, notes: response.data });
            })
        })
        .catch((error) => dispatch({ type: ERROR_SIGNIN }))};
};
export const signOut = () => {
    return dispatch => {
        return axios
        .post('/users/logout')
        .then((response) => {
            console.log(response);
            dispatch({
                type: SIGNOUT,
            });
        })
        .catch((error) => console.log(error))};
};