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

export const SYNC_SAVED_JOB_LIST_SUCCESS = 'SYNC_SAVED_JOB_LIST_SUCCESS'
export const syncSavedJobListSuccess = syncSavedJobList =>({
    type: SYNC_SAVED_JOB_LIST_SUCCESS,
    syncSavedJobList
})

export const SYNC_SAVED_JOB_LIST_ERROR = 'SYNC_SAVED_JOB_LIST_ERROR'
export const syncSavedJobListError = error => ({
    type: SYNC_SAVED_JOB_LIST_ERROR,
    error
})


export const syncSavedJobList = username => dispatch =>{
    const data = {username: username}
    return fetch(`${API_BASE_URL}/job/sync`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
      .then(json => dispatch(syncSavedJobListSuccess(json)))
      .catch(err => dispatch(syncSavedJobListError(err)))
}


export const saveJob = job => dispatch =>{
    console.log("savejob")
    return fetch(`${API_BASE_URL}/job`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(job)
    })
    .then(res => res.json())
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