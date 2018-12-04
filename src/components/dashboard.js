import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchProtectedJobList} from '../actions/protected-joblist';
import {DashboardHeader} from './dashboard-header'
import DashboardForm from './dashboard-form'
import DashboardJobResult from './dashboard-result'
import './styles/dashboard.css'

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        // this.props.dispatch(fetchProtectedJobList());
    }

    render() {
        return (
        <div className="dashboard">
            <DashboardHeader 
            username={this.props.username}
            name={this.props.name}
            protectedData={this.props.protectedData} />

            <DashboardForm />
            <DashboardJobResult 
            jobs={this.props.protectedJobList}
            savedJobs={this.props.savedJobList}
            showProtectedJobList={this.props.showProtectedJobList}
            showSavedJobList={this.props.showSavedJobList}
            formValues={this.props.formValues}
            />
        </div>
        );
    }
}



const mapStateToProps = state => {

    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        protectedJobList: state.protectedJobList.joblist,
        showProtectedJobList: state.protectedJobList.showJoblist,
        showSavedJobList: state.savedJobList.showSavedJobList,
        savedJobList: state.savedJobList.savedJobList
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
