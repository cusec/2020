import React from 'react';
import "../styles/about.css";
import Conf from "../assets/images/cusecConference.png";
import handshake from "../assets/images/handshake.png";
import bulb from "../assets/images/innovation.png";
import network from "../assets/images/network.png";
import mic from "../assets/images/microphone.png";
import Feature from "../components/features";

export default class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="about-container">
                    <div className="center-container">
                        <h1>Canada's Largest Software Engineering Conference</h1>
                        <div><img src={Conf} alt="CUSEC 2019 Conference" /></div>
                        <p>Join over 500 students from across Canada for three days of knowledge sharing, mentoring, career opportunities and community with people who are enthusiastic about the future of tech.</p>
                        <p>CUSEC is an annual software engineering conference organized for students by students. It was founded in 2002 by a small team of tech enthusiasts on a mission to educate and expose students to a diverse range of areas in software engineering and computer science. The conference enables attendees to discover knowledgeable speakers, connect with sponsoring companies, and make lifelong friends, all in a safe and comfortable space. </p>

                        <div className="feature-container">
                            <Feature desc="Get exclusive opportunities to network with recruiters from the top companies that redefine tech everyday (IBM, Shopify, Yelp, Amazon etc.) at our career fair." />
                            <Feature desc="Get exclusive opportunities to network with recruiters from the top companies that redefine tech everyday (IBM, Shopify, Yelp, Amazon etc.) at our career fair." />
                            <Feature desc="Get exclusive opportunities to network with recruiters from the top companies that redefine tech everyday (IBM, Shopify, Yelp, Amazon etc.) at our career fair." />
                            <Feature desc="Get exclusive opportunities to network with recruiters from the top companies that redefine tech everyday (IBM, Shopify, Yelp, Amazon etc.) at our career fair." />
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }

}