import { REGISTER, SIGNIN, SIGNOUT } from '../actions/user';

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
            return Object.assign({}, { signedOut: true });
        default:
            return state;
    }
}