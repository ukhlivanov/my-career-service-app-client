import React from 'react'
import Job from './Job'
import {connect} from 'react-redux'
import {showSavedJobList, getSavedJobList} from'../actions/saved-joblist'

export  class ProtectedJobList extends React.Component{

    handleShowSavedJobLIst(){
        this.props.dispatch(showSavedJobList());
        this.props.dispatch(getSavedJobList());       
   }

    render(){
        let savedJobsId = [];
        const savedJobs = this.props.savedJobs;
        console.log(11111111111)
        console.log(savedJobs)
        if(!savedJobs){
            alert(1);
        }else{
            savedJobs.forEach(element => {
                savedJobsId.push(element.id)
            });
        }
    

        console.log(savedJobsId);

    

        const jobs = this.props.jobs.map((job, index) =>
        
        <li key={index}>
            <Job {...job} savedJobsId={savedJobsId}/>
        </li>
        );
        return(
            <div>
            <p>Welcome in Career Service</p>
                <button onClick={() => this.handleShowSavedJobLIst()}>
                    Saved jobs list
                </button>
                    <ul>
                        {jobs}
                    </ul>
            </div>
        );
    }
}

export default connect()(ProtectedJobList)