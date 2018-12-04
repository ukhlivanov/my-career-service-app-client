import React from 'react'
import {connect} from 'react-redux';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchProtectedJobList} from '../actions/protected-joblist';

export class DashboardHeader extends React.Component{
    
    render(){
        return(
            
            <div className="dashboard-block dashboard-header">
                <p>Welcome in Career Service</p>
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
            </div>
      
        )
    }
}



// const mapStateToProps = state => {
//     console.log(333)
//     const {currentUser} = state.auth;
//     return {
//         username: state.auth.currentUser.username,
//         name: `${currentUser.firstName} ${currentUser.lastName}`,
//         protectedData: state.protectedData.data,
//         protectedJobList: state.protectedJobList.joblist
//     };
// }; 
// export default connect(mapStateToProps)(DashboardHeader)