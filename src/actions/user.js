import axios from 'axios';
import { FETCH_NOTES} from './notes';

export const REGISTER = 'REGISTER';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const ERROR_SIGNIN = 'ERROR_SIGNIN';

export const register = user => {
    return dispatch => {
        return axios('https://quiet-fjord-20542.herokuapp.com/users/register', user)
        .then((response) => {
            console.log(response);
            dispatch({
                type: REGISTER,
            });
        })
        .catch((error) => console.log(error))};
};
export const signIn = credentials => {
    return dispatch => {
        return axios
        .post('https://quiet-fjord-20542.herokuapp.com/users/login', credentials, { 'withCredentials': true, 'Access-Control-Allow-Credentials': true })
        .then(() => {
            return axios.get('https://quiet-fjord-20542.herokuapp.com/notes', { 'withCredentials': true, 'Access-Control-Allow-Credentials': true})
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
        .post('https://quiet-fjord-20542.herokuapp.com/users/logout')
        .then((response) => {
            console.log(response);
            dispatch({
                type: SIGNOUT,
            });
        })
        .catch((error) => console.log(error))};
};