import React from 'react'
import {connect} from 'react-redux';
import HeaderBar from './header-bar';

export class DashboardHeader extends React.Component{
    render(){
        return(
            
            <div className="nav-bar">
                <div className="rl-logo">
                    <h1>CareerLine</h1>
                </div>
                
                <div className="top-nav">
                    <div className="nav-data">
                        <HeaderBar /> 
                    </div> 
                    <div className="nav-data"  id="user_name">
                        {this.props.username}    
                    </div>
                    <div className="nav-data" id="name">
                        {this.props.name}
                    </div>                 
                </div>
            
            </div>
      
        )
    }
}
export default connect()(DashboardHeader);