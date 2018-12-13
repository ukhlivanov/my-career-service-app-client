import React from 'react'

export default class DashboardInfo extends React.Component{
    
    render(){
        return(
            <div className="dashboard-info">
                    <p><span className="found_jobs">Found {this.props.jobs.length} jobs</span></p>
            </div>
        );
    }
}