import React from 'react'
import {saveJob, deleteJob} from '../actions/saved-joblist'
import {connect} from 'react-redux'
import {showSavedJobList} from'../actions/saved-joblist'
import {redirectForApply} from '../actions/saved-joblist'




export class Job extends React.Component{
    handleSaveJob(){

        const job = {
            "id": this.props.id,
            "title": this.props.title,
             "type": this.props.type,
             "location": this.props.location,
             "created_at": this.props.created_at,
             "company": this.props.company,
             "url":this.props.url,
             "username": this.props.username
        }
        this.props.dispatch(saveJob(job));
    }

    handleDeleteJob(){
        const id = {
            "id": this.props.id,
        }
        this.props.dispatch(deleteJob(id))
        this.props.dispatch(showSavedJobList());
    }

    handleApplyJob(){
        if(this.props.url){
            window.open(this.props.url, "_blank")
        }else{
            alert('No url found')
        }
        this.props.dispatch(redirectForApply(this.props.url))
        
    }
    render(){
        
        return(
            <div className="job">
                <div className="job_info">
                    <p id="job_title">{this.props.title}</p>
                    <p id="job_company_type"><span id="job_company">{this.props.company}</span> - <span id="job_type">{this.props.type}</span></p>
                    <p id="job_location">{this.props.location}</p>
                    <p id="job_created_at">{this.props.created_at}</p>
                </div>
               
                <div className="job_buttons">
                    <button className="control_button apply_button" onClick={() => this.handleApplyJob()}>
                                Apply
                    </button>
                    
                    {this.props.saved ?
                        <button className="control_button delete_button" onClick={() => this.handleDeleteJob()}>
                                Delete
                        </button>:
                                    !this.props.saved && (this.props.savedJobsId.includes(this.props.id)) ?
                                    <button className="control_button saved_button" disabled>
                                            Saved
                                    </button>:
                                    <button className="control_button save_button" onClick={() => this.handleSaveJob()}>
                                            Save
                                    </button>   
                    }
                </div>
            </div>
        );
    }
}

export default connect()(Job)