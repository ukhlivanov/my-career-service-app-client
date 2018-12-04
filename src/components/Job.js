import React from 'react'
import {saveJob, deleteJob} from '../actions/saved-joblist'
import {connect} from 'react-redux'
import {getSavedJobList} from'../actions/saved-joblist'
import {showSavedJobList} from'../actions/saved-joblist'



export class Job extends React.Component{
    handleSaveJob(){
        const job = {
            "id": this.props.id,
            "title": this.props.title,
             "type": this.props.type,
             "location": this.props.location,
             "created_at": this.props.created_at,
             "company": this.props.company
        }
        return this.props.dispatch(saveJob(job));
    }

    handleDeleteJob(){
        const id = {
            "id": this.props.id,
        }
        this.props.dispatch(deleteJob(id))
        this.props.dispatch(showSavedJobList());
        this.props.dispatch(getSavedJobList());    
        // this.props.dispatch(getSavedJobList())
    }
    render(){
        return(
            <div className="job">
                <p>{this.props.title}</p>
                <p>{this.props.type}</p>
                <p>{this.props.location}</p>
                <p>{this.props.created_at}</p>
                <p>{this.props.company}</p>
                
                {this.props.saved ?
                    <button onClick={() => this.handleDeleteJob()}>
                            Delete
                    </button>:
                                !this.props.saved && (this.props.savedJobsId.includes(this.props.id)) ?
                                <button disabled>
                                        Saved
                                </button>:
                                <button onClick={() => this.handleSaveJob()}>
                                        Save
                                </button>   
                }
            </div>
        );
    }
}

export default connect()(Job)