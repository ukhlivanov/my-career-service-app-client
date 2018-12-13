import React from 'react'

import SavedJobList from './savedjoblist'
import ProtectedJobList from './protectedjoblist'


export  default class DashboardJobResult extends React.Component{
    
    render(){
        console.log(2222222)
        console.log(this.props)
        return(
            <div className="dashboard-block dashboard-header">
                {this.props.showSavedJobList ?
                   <SavedJobList savedJobs={this.props.savedJobs}/>:
                   <ProtectedJobList  jobs={this.props.jobs} savedJobs={this.props.savedJobs}/> 
                }
            </div>
        )
    }
}
