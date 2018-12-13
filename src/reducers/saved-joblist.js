
import {
    SAVE_JOB_SUCCESS,
    SAVE_JOB_ERROR,
    SHOW_SAVED_JOB_LIST,
    HIDE_SAVED_JOB_LIST,
    GET_SAVED_JOB_LIST_SUCCESS,
    GET_SAVED_JOB_LIST_ERROR,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_ERROR,
    REDIRECT_FOR_APPLY
} from '../actions/saved-joblist'

const initialState = {
    savedJobList: [],
    lastJobIsSaved: false,
    showSavedJobList: false,
    jobIsDeleted: false,
    error: null,
    url: {}
}


export default function reducer(state = initialState, action){
    
    if(action.type === SAVE_JOB_SUCCESS){
        return Object.assign({}, state, {
            savedJobList: [...state.savedJobList, action.job],
            lastJobIsSaved: true,
            error: action.error
        })
    }
    else if(action.type === SAVE_JOB_ERROR){
        return {lastJobIsSaved: false}
    }
    else if(action.type === DELETE_JOB_SUCCESS){
        console.log(action)
        console.log(state.savedJobList)
        return Object.assign({}, state, {
            savedJobList: state.savedJobList.filter(job => action.job.id != job.id), 
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
        for(var i in action.savedJobList){
            let date= new Date(action.savedJobList[i].created_at)
            let formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()
            action.savedJobList[i].created_at = formattedDate;
        }
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
    else if(action.type === REDIRECT_FOR_APPLY){
        console.log('action')
        console.log(action)
        return Object.assign({}, state, {
            url: action.url
        })
    } 

    return state
}
