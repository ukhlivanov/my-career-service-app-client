import React from 'react'
import Job from './Job'
import {connect} from 'react-redux'
import {showSavedJobList, getSavedJobList} from'../actions/saved-joblist'
import DashboardInfo from './dashboard-info'


export  class ProtectedJobList extends React.Component{

    handleShowSavedJobLIst(){
        this.props.dispatch(showSavedJobList());
              
   }

    render(){
        let savedJobsId = [];
        const savedJobs = this.props.savedJobs;
            savedJobs.forEach(element => {
                savedJobsId.push(element.id)
            });
        
        const jobs = this.props.jobs.map((job, index) =>

            <li key={index}>
                <Job {...job} savedJobsId={savedJobsId} username={this.props.username}/>
            </li>


        );
        return(
            <div className="dashboard-info-up">
                <div className="dashboard-info">
                    {this.props.jobs.length===0 ?
                        <div className="no-jobs-found">
                            <p>There are no jobs found.<br/>
                            Please, fill out the form and click FIND JOBS.</p>
                        </div>:
                        <div>
                        <DashboardInfo jobs={this.props.jobs}/>
                        </div>   
                    }
                    {this.props.savedJobs.length===0 ? 
                         null:
                         <button id="my_jobs_button" onClick={() => this.handleShowSavedJobLIst()}>
                            My Jobs
                        </button>  
                    }
                </div>
                <ul>
                    {jobs}
                </ul>
            </div>
        );
    }
}

export default connect()(ProtectedJobList)