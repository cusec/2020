import React from 'react';
import "../styles/about.css";
import Conf from "../assets/images/cusecConference.png";
import handshake from "../assets/images/handshake.png";
import bulb from "../assets/images/innovation.png";
import network from "../assets/images/network.png";
import mic from "../assets/images/microphone.png";
import Feature from "../components/features";


import Testimonial from "../components/testimonials";


export default class About extends React.Component {
  
    render() {
        return (
            <React.Fragment>
                    <div id="about" className="about-container  ">
                        <div className="center-container scroll-offset">
                            <h1>Our 19th Annual Software Engineering Conference</h1>
                            <div><img src={Conf} className="about-container-img" alt="CUSEC 2019 Conference" /></div>
                            <div style={{ with: "100%", maxWidth: 600 }}>
                                <p className="bold">Join over 500 students from across Canada for three days of knowledge sharing, mentoring, career opportunities and community with people who are enthusiastic about the future of tech.</p>
                                <p>CUSEC is an annual software engineering conference organized for students by students. It was founded in 2002 by a small team of tech enthusiasts on a mission to educate and expose students to a diverse range of areas in software engineering and computer science. The conference enables attendees to discover knowledgeable speakers, connect with sponsoring companies, and make lifelong friends, all in a safe and comfortable space. </p>
                            </div>
                            <div className="feature-container">
                                <Feature img={mic} title="Inspiring Keynotes" desc="We take great pride in hosting unique and knowledgeable speakers that come from many backgrounds in the software industry." />
                                <Feature img={handshake} title="Meet Recruiters" desc="Get exclusive opportunities to network with recruiters from the top companies that redefine tech everyday at our career fair." />
                                <Feature img={bulb} title="Attend Workshops" desc="Broaden your skill sets with new technological tools and gain insight on the hottest topics and challenges facing today’s tech industry." />
                                <Feature img={network} title="Build Your Network" desc="Meet like-minded peers, and fellow students from across North America. Make lifelong friendships." />
                            </div>
                            <div>
                                <div className="line-break"></div>
                                <div className="tml-container">
                                    <h1 className="tml-title">Hear From Past Attendees</h1>
                                    <Testimonial />
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }

}