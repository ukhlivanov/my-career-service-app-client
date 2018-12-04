import {
    FETCH_PROTECTED_JOBLIST_SUCCESS,
    FETCH_PROTECTED_JOBLIST_ERROR,
} from '../actions/protected-joblist';

const initialState = {
    joblist: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type ===  FETCH_PROTECTED_JOBLIST_SUCCESS) {
        console.log(action)
        return Object.assign({}, state, {
            joblist: action.joblist,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_JOBLIST_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
