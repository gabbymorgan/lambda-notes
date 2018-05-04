import { REGISTER, SIGNIN, SIGNOUT, ERROR_SIGNIN } from '../actions/user';

const initialState = {
    signedIn: false,
    registered: false, 
}

export default(state=initialState, action) => {
    switch(action.type) {
        case REGISTER:
            return { signedIn: false, registered: true };
        case SIGNIN:
            return { ...state, signedIn: true }
        case SIGNOUT:
            return Object.assign({}, { signedIn: false });
        case ERROR_SIGNIN:
            return Object.assign({}, { signedIn: false, authFail: true })
        default:
            return state;
    }
}