import axios from 'axios';

export const REGISTER = 'REGISTER';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';

export const register = user => {
    return dispatch => {
        return axios('https://quiet-fjord-20542.herokuapp.com/users/register', user, { withCredentials: true })
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
        .post('https://quiet-fjord-20542.herokuapp.com/users/login', credentials)
        .then((response) => {
            console.log(response);
            dispatch({
                type: SIGNIN,
            });
        })
        .catch((error) => console.log(error))};
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