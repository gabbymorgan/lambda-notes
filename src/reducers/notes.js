import { 
    CREATE_NOTE, 
    EDIT_NOTE, 
    DELETE_NOTE, 
    SORT_NEWEST,
    SORT_OLDEST, 
    FETCH_NOTES,
    SEARCH
} from '../actions/notes';

const initialState = {
    sortedBy: null,
    notes:[],
    visibleNotes: [],
}

export default(state=initialState, action) => {
    switch(action.type) {
        case(FETCH_NOTES):
            return Object.assign({}, state, {
                notes: action.notes,
                visibleNotes: action.notes,
            });
        case(CREATE_NOTE):
            return Object.assign({}, state, {
                notes: [...state.notes, {
                    ...action.note
                }]
            })
        case(EDIT_NOTE):
            return Object.assign({}, state, {
                notes: state.notes.filter(note => {
                    return note._id !== action.note._id
                }).concat({
                    ...action.note
                }), 
                visibleNotes: state.visibleNotes.filter(note => {
                    return note._id !== action.note._id
                }).concat({
                    ...action.note
                }), 
            });
        case(DELETE_NOTE):
            return Object.assign({}, state, {
                visibleNotes: state.visibleNotes.filter(note => note._id !== action._id),
            });
        case(SORT_OLDEST):
            return Object.assign({}, state, {
                sortedBy: 'oldest',
                visibleNotes: state.visibleNotes.sort((a, b) => a.date > b.date),
            });
        case(SORT_NEWEST):
            return Object.assign({}, state, {
                sortedBy: 'newest',
                visibleNotes: state.visibleNotes.sort((a, b) => a.date < b.date),
            });
        case(SEARCH):
            return Object.assign({}, state, {
                visibleNotes: action.notes.filter(
                        note => note.text.toLowerCase().includes(action.input.toLowerCase()) || note.title.toLowerCase().includes(action.input.toLowerCase())),
            });
        default:
            return state;
    }
}