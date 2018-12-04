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
    fetch(`https://jobs.github.com/positions.json?description=${jobtitle}&full_time=${jobtype}&location=${location}`)
    // fetch(`https://data.usajobs.gov/api/search?Keyword=Software`, {
    //     method: 'GET',
    //     headers: {
    //         "Host": 'data.usajobs.gov',          
    //         "User-Agent": 'ukhlivanov@gmail.com',          
    //         "Authorization-Key": 'gVBrsIKabun4Q0VicxLo/iqJeU444cFQonwV2702B9w='   
    //     }
    // })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }    
            return res.json()
        })
        .then(json => dispatch(fetchProtectedJobListSuccess(json)))
        .catch(err => {
            dispatch(fetchProtectedJobListError(err));
        });
};
