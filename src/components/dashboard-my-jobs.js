import React from 'react'

export default class DashboardMyJobs extends React.Component{
    
    render(){
        return(
            <div>
                <button id="my_jobs_button" onClick={() => this.handleShowSavedJobLIst()}>
                        My Jobs
                </button>
            </div>
        );
    }
}