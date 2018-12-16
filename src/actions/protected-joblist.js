import {API_BASE_URL} from '../config';

export const FETCH_PROTECTED_JOBLIST_SUCCESS = 'FETCH_PROTECTED_JOBLIST_SUCCESS';
export const fetchProtectedJobListSuccess = joblist => ({
    type: FETCH_PROTECTED_JOBLIST_SUCCESS,
    joblist
});

export const FETCH_PROTECTED_JOBLIST_ERROR = 'FETCH_PROTECTED_JOBLIST_ERROR';
export const fetchProtectedJobListError = error => ({
    type: FETCH_PROTECTED_JOBLIST_ERROR,
    error
});
export const fetchProtectedJobList = (location, jobtitle, jobtype) => (dispatch) => {
    if(location===undefined){
        location = ''
    }
    if(jobtitle===undefined){
        jobtitle = ''
    }
    const data = {
        jobtitle: jobtitle,
        location: location
    }

    return fetch(`${API_BASE_URL}/job/github`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
      .then(json => dispatch(fetchProtectedJobListSuccess(json)))
      .catch(err => dispatch(fetchProtectedJobListError(err)))
};
