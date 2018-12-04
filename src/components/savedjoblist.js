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
            <div>
                <p>Welcome in Saved Job list</p>
                <button onClick={() => this.handleProtectedJobLIst()}>
                    Protected jobs list
                </button>
                <ul>
                    {savedJobs}
                </ul>
            </div>
        );
    }
}

export default connect()(SavedJobList)