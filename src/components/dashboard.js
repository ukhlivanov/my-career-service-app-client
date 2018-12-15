import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {DashboardHeader} from './dashboard-header'
import DashboardForm from './dashboard-form'
import DashboardJobResult from './dashboard-result'
import DaschboardWelcome from './daschboard-welcome'
import {syncSavedJobList} from'../actions/saved-joblist'
import './styles/dashboard.css'
import './styles/job-block.css'
import './styles/float-grid.css'



export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(syncSavedJobList(this.props.username));
    }

    render() {
        return (
        <div className="dashboard">
            <DashboardHeader 
            username={this.props.username}
            name={this.props.name}
            loggedIn={this.props.loggedIn}
            savedJobs={this.props.savedJobs}/>

            <div className="formandresult">
                <DaschboardWelcome />
                <DashboardForm  username={this.props.username}/>
                <DashboardJobResult 
                jobs={this.props.protectedJobList}
                savedJobs={this.props.savedJobList}
                showProtectedJobList={this.props.showProtectedJobList}
                showSavedJobList={this.props.showSavedJobList}
                username={this.props.username}
                />
            </div>
            
        </div>
        );
    }
}



const mapStateToProps = state => {

    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedJobList: state.protectedJobList.joblist,
        showProtectedJobList: state.protectedJobList.showJoblist,
        showSavedJobList: state.savedJobList.showSavedJobList,
        savedJobList: state.savedJobList.savedJobList,
        loggedIn: state.auth.currentUser !== null,
        hasAuthToken: state.auth.authToken !== null
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
