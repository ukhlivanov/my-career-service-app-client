import React from 'react'
import{Redirect, withRouter} from 'react-router-dom'
import Header from "./landingPage-header"
import About from "./landingPage-about"
import Footer from "./landingPage-footer"
import {connect} from 'react-redux'
import './styles/landing-page.css'


// class LandingPage extends React.Component{

//     render(){
//         return(
//             <div className="landingPage">
//                 <Header />
//                 <About />
//                 <Footer />
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     start: state.start
//  });

// export default connect(mapStateToProps)(LandingPage);


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
