import React from "react";

export default class DaschboardWelcome extends React.Component{
    render(){
        return(
            <div className="dashboard-block">
                <div id="dashboard-welcome">
                    <div className="dashboard-welcome-in">
                        <h2>Welcome in CareerLine!</h2>
                        <p>We can help you find the best tech jobs!<br/>
                        Apply today and get offer!</p>
                    </div>

                    {/* <i className="fas fa-handshake fa-6x" ></i> */}
                </div>
            </div>
        );
    }
}