import React from 'react';
import Logo from "../assets/images/cusec-logo-dark-background.png";
import bg from "../assets/images/landing-bg.png";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import "../styles/landing.css";

export default class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="container">
          <div id="landing">
            <div id="landing-content">
              <img id="logo" src={Logo} alt="CUSEC 2020" />
              <div>
                <h1 className="typewriter-text">> Canadian University Software Engineering Conference</h1>
              </div>
              <div className="date-location">
                <span>
                  January 17 - 19, 2020
                </span>
                <div></div>
                <span>
                  Montreal, Canada
                </span>
              </div>
              <a href="https://2019.cusec.net/" target="_blank"><Button className="button" variant="small" >
      Re-live CUSEC 2019</Button></a>
              <div className="contact-info"> 
              <div>Email <a href="mailto:info@cusec.net">info@cusec.net</a> if you have any general inquiries.</div>
              <div>Email <a href="mailto:sponsor@cusec.net">sponsor@cusec.net</a> if you are interested in sponsoring CUSEC.</div>
              </div>
            </div>
            <div className="triangle-right"></div>
            <div className="triangle-left"></div>
            <img id="landing-bg" src={bg} alt="triangle background" />
          </div>
          <div id="landing-bottom">
            <div><div className="numbers">01</div><span>Connect</span> with <br />like-minded peers.</div>
            <div><div className="numbers">02</div><span>Learn</span> from world-renowned <br />experts.</div>
            <div><div className="numbers">03</div><span>Discover</span> career <br />opportunities.</div>
          </div>
         
        </div>
      </React.Fragment>
    )
  }
}