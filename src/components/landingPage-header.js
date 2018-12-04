import React from 'react'
import {connect} from 'react-redux'
import {getLoginPage} from '../actions/auth'
import './styles/landing-page.css'
import logo from './img/logo.png'

class LandingPageHeader extends React.Component{
    
    handleStart(e){
        this.props.dispatch(getLoginPage())
         console.log(this.props.start);
    }
    render(){
        return(
        <div className="showcase">
            <div className="content">
                <img src={logo} className="logo" alt="Job For Fun" />
                <div className="title">
                      Looking for a job?<br/>
                      Welcome To <br/>
                      Career Service
                </div>
                <button 
                    type="submit" 
                    className="js-start"
                    onClick={(e)=>this.handleStart(e)}>Get Started</button>
            </div>
        </div>
        );
    }

}

const mapStateToProps = state => ({
    start: state.auth.start
 });

export default connect(mapStateToProps)(LandingPageHeader);