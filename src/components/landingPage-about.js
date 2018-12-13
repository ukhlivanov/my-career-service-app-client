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
                  <h3>Our mission</h3>
                  <p>
                    However, often when changing jobs, we think not only about changing the company, but also about changing professional activities. And it is precisely in these moments that the question arises: “How now to find a good job? And most importantly, what should this work be? ”
                    To solve such issues quickly and easily, just go to CareerLine!
                    It is convenient to look for a job on our website with user-friendly interface: just a few a mouse click and you will receive a list of current and high-quality jobs.
                    Our web application uses the GitHub Jobs API.
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
    }
}