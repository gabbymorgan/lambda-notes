import axios from 'axios';
import { SIGNIN } from './user';

export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SORT_NEWEST = 'SORT_NEWEST';
export const SORT_OLDEST = 'SORT_OLDEST';
export const FETCH_NOTES = 'FETCH_NOTES';
export const SEARCH = 'SEARCH';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://quiet-fjord-20542.herokuapp.com';

export const fetchNotes = () => {
    return dispatch => {
        return axios.get('/notes', { 'withCredentials': true, 'Access-Control-Allow-Credentials': true})
        .then((response) => {
            console.log(response);
            dispatch({ type: FETCH_NOTES, notes: response.data });
            dispatch({ type: SIGNIN });
        })
        .catch((error) => console.log(error))};
}

export const createNote = note => {
    return dispatch => {
        return axios.post(`/notes/`, {
            title: note.title,
            text: note.text
        })
        .then((response) => {
            dispatch({
                type: CREATE_NOTE,
                _id: response.data._id,
                title: response.data.title,
                text: response.data.text
            });
        })
        .catch((error) => console.log(error))};
}

export const editNote = note => {
    return dispatch => {
        return axios.put(`/notes/${note._id}`, {
            _id: note._id,
            title: note.title,
            text: note.text
        })
        .then((response) => {
            dispatch({
                type: EDIT_NOTE,
                _id: note._id,
                title: note.title,
                text: note.text
            })
        })
        .catch((error) => console.log(error))};
}

export const deleteNote = _id => {
    return dispatch => {
        return axios.delete(`/notes/${_id}`)
        .then((response) => {
            dispatch({
                type: DELETE_NOTE,
                _id
            })})
        .catch((error) => console.log(error))};
}

export const sortNewest = () => {
    return {
        type: SORT_NEWEST,
    }
}

export const sortOldest = () => {
    return {
        type: SORT_OLDEST,
    }
}

export const search = (input) => {
    return dispatch => {
        return axios.get('/notes')
        .then((response) => {
            dispatch({
                type: SEARCH,
                notes: response.data,
                input});
        })
        .catch((error) => console.log(error))};
}
