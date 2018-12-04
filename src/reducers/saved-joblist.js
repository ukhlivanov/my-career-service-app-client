import {
    SAVE_JOB_SUCCESS,
    SAVE_JOB_ERROR,
    SHOW_SAVED_JOB_LIST,
    HIDE_SAVED_JOB_LIST,
    GET_SAVED_JOB_LIST_SUCCESS,
    GET_SAVED_JOB_LIST_ERROR,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_ERROR
} from '../actions/saved-joblist'

const initialState = {
    savedJobList: [],
    lastJobIsSaved: false,
    showSavedJobList: false,
    jobIsDeleted: false,
    error: null
}


export default function reducer(state = initialState, action){

    if(action.type === SAVE_JOB_SUCCESS){
        return Object.assign({}, state, {
            lastJobIsSaved: true,
            error: null
        })
    }
    else if(action.type === SAVE_JOB_ERROR){
        return {lastJobIsSaved: false}
    }
    else if(action.type === DELETE_JOB_SUCCESS){
        return Object.assign({}, state, {
            jobIsDeleted: true,
            error: null
        })
    }
    else if(action.type ===DELETE_JOB_ERROR){
        return Object.assign({}, state, {
            jobIsDeleted: false,
            error: null
        })
    }
    else if(action.type === SHOW_SAVED_JOB_LIST){
        return Object.assign({}, state, {
            // savedJobList: action.savedJobList,
            showSavedJobList: true,
            error: null
        })
    } 
    else if(action.type === HIDE_SAVED_JOB_LIST){
        return Object.assign({}, state, {
       
            showSavedJobList: false,
            error: null
        })
    } 
    else if(action.type === GET_SAVED_JOB_LIST_SUCCESS){
        return Object.assign({}, state, {
            savedJobList: action.savedJobList,
            error: null
        })
    }    
    else if(action.type === GET_SAVED_JOB_LIST_ERROR){
        return Object.assign({}, state, {
            error: action.error
        })
    } 

    return state
}
