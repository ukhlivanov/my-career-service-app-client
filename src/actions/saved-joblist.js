import {API_BASE_URL} from '../config';

export const REDIRECT_FOR_APPLY = 'REDIRECT_FOR_APPLY'
export const redirectForApply = url =>({
    type: REDIRECT_FOR_APPLY,
    url
}) 
export const SAVE_JOB_SUCCESS = 'SAVE_JOB_SUCCESS';
export const saveJobSuccess = job => ({
    type: SAVE_JOB_SUCCESS,
    job
})

export const SAVE_JOB_ERROR = 'SAVE_JOB_ERROR'
export const saveJobError = error => ({
    type: SAVE_JOB_ERROR,
    error
})

export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS'
export const deleteJobSuccess = job => ({
    type: DELETE_JOB_SUCCESS,
    job
})

export const DELETE_JOB_ERROR = 'DELETE_JOB_ERROR'
export const deleteJobError = error =>({
    type: DELETE_JOB_ERROR,
    error
})

export const SHOW_SAVED_JOB_LIST='SHOW_SAVED_JOB_LIST'
export const showSavedJobList = savedJobList => ({
    type: SHOW_SAVED_JOB_LIST,
    savedJobList
})

export const HIDE_SAVED_JOB_LIST='HIDE_SAVED_JOB_LIST'
export const hideSavedJobList = savedJobList =>({
    type: HIDE_SAVED_JOB_LIST,
    savedJobList
})

export const GET_SAVED_JOB_LIST_SUCCESS = 'GET_SAVED_JOB_LIST_SUCCESS'
export const getSavedJobListSuccess = savedJobList => ({
    type: GET_SAVED_JOB_LIST_SUCCESS,
    savedJobList
})

export const GET_SAVED_JOB_LIST_ERROR = 'GET_SAVED_JOB_LIST_ERROR'
export const getSavedJobListError = error => ({
    type: GET_SAVED_JOB_LIST_ERROR,
    error
})

export  const getSavedJobList = () => (dispatch) =>{
    return fetch(`${API_BASE_URL}/job`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(json => dispatch(getSavedJobListSuccess(json)))
    .catch(err => dispatch(getSavedJobListError(err)))
}

export const saveJob = job => dispatch =>{
    return fetch(`${API_BASE_URL}/job`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(job)
    }).then(res => res.json())
      .then(json => dispatch(saveJobSuccess(json)))
      .catch(err => dispatch(saveJobError(err)))
}

export const deleteJob = id => dispatch => {
    console.log(id)
    return fetch(`${API_BASE_URL}/job/`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(id)
    }).then(res => res.json())
    .then(json => dispatch(deleteJobSuccess(id)))
    .catch(err => dispatch(deleteJobError(err)))
}