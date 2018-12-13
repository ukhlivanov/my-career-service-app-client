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
    console.log(location)
    console.log(jobtitle)
    if(location===undefined){
        location = ''
    }
    if(jobtitle===undefined){
        jobtitle = ''
    }
    
    fetch(`https://jobs.github.com/positions.json?description=${jobtitle}&full_time=false&location=${location}&page=1`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            
            // console.log(res.json())
            
            return res.json()
        })
        .then(json => dispatch(fetchProtectedJobListSuccess(json)))
        .catch(err => {
            dispatch(fetchProtectedJobListError(err));
        });
};
