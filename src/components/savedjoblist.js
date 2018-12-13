import React from 'react'
import {connect} from 'react-redux'
import Job from './Job'
import {hideSavedJobList} from'../actions/saved-joblist'

export class SavedJobList extends React.Component{
    handleProtectedJobLIst(){
        this.props.dispatch(hideSavedJobList());
    }
    render(){
        const savedJobs = this.props.savedJobs.map((job, index) =>
        <li key={index}>
            <Job {...job} />
        </li> 
        );
        return(
            <div className="my-jobs">
                <p className="my-jobs-info">Here you can track all your saved jobs on CareerLine</p>
                <p className="my-jobs-foundjobs">You have {this.props.savedJobs.length} saved jobs</p>
                <ul>
                    {savedJobs}
                </ul>
                <button id="dashboard-button" onClick={() => this.handleProtectedJobLIst()}>
                   Dashboard
                </button>
            </div>
        );
    }
}

export default connect()(SavedJobList)