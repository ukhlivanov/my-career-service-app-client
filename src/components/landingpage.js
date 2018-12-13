import React from 'react'
import{Redirect, withRouter} from 'react-router-dom'
import Header from "./landingPage-header"
import About from "./landingPage-about"
import Footer from "./landingPage-footer"
import {connect} from 'react-redux'
import './styles/float-grid.css'
import './styles/landing-page.css'

export function LandingPage(props){

        if (props.start===true) {
            return <Redirect to="/loginpage" />;
        }
        return(
            <div className="landingPage">
                <Header />
                <About />
                <Footer />
            </div>
        );
}

const mapStateToProps = state => ({
    start: state.auth.start
 });

export default connect(mapStateToProps)(LandingPage);
