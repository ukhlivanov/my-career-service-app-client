import React from 'react'

export default class LandingPageAbout extends React.Component{
    render(){
        return(
            <section className="about bg-light">
            <div className="container">
              <div className="grid-2">
                <div className="center">
   
                  <i className="fas fa-handshake fa-9x" ></i>
                </div>
                <div className="aboutus">
                  <h3>About Us</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eos aperiam labore consectetur maiores ea magni exercitationem
                    similique laborum sed, unde, autem vel iure doloribus aliquid. Aspernatur explicabo consectetur consequatur non
                    nesciunt debitis quos alias soluta, ratione, ipsa officia reiciendis.</p>
                </div>
              </div>
            </div>
          </section>
        );
    }
}