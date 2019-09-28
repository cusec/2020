import React from 'react';
import emailIcon from "../assets/images/close-envelope.png";
import schoolIcon from "../assets/images/graduation-cap.png";
import ScrollableAnchor from "react-scrollable-anchor";

const HDInfo = [
    {
        uni: "Universities in Montreal",
        name: "Laura Wheatley",
        email: "montreal@cusec.net"
    },
    {
        uni: "University of New Brunswick",
        name: "Michael Walz",
        email: "unb@cusec.net"
    },
    {
        uni: "University of Ottawa",
        name: "Ellen Li",
        email: "ottawa@cusec.net"
    },
    {
        uni: "Carleton University",
        name: "Hamna Nimra Manzoor",
        email: "carleton@cusec.net"
    },
    {
        uni: "Queen's University",
        name: "Liam Walsh",
        email: "queens@cusec.net"
    },
    {
        uni: "University of Toronto",
        name: "Ida Liu",
        email: "toronto@cusec.net"
    },
    {
        uni: "University of Guelph",
        name: "Hrayr Mkrtchyan",
        email: "guelph@cusec.net"
    },
    {
        uni: "University of Manitoba",
        name: "Isham Singh Behl",
        email: "manitoba@cusec.net"
    },
]


export default class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ScrollableAnchor id={"contact"}>
                    <div className="contact-container">
                        <div className="center-container">
                            <h1>Contact</h1>
                            <p className="bold">Want to get in touch? Shoot us an email!</p>
                            <div className="contact-box">
                                <div style={{ display: "flex", alignItems: "center" }}><img className="contact-icon" src={emailIcon} alt="Email Icon" /><p className="bold">EMAIL OUR TEAM</p></div>
                                <p><span className="bold">sponsor@cusec.net</span> ~ Email for information about <span className="bold">sponsoring</span> the event.</p>
                                <p><span className="bold">info@cusec.net</span> ~ Email for information about <span className="bold">booking a hotel room</span> for the conference or any <span className="bold">general inquiries</span>.</p>
                                <p><span className="bold">web@cusec.net</span> ~ Email for information about the <span className="bold">website</span> or <span className="bold">suggestions</span> for improvement.</p>
                                <p>If you are a student with questions about the event, transportaion, hotel or other inquiries email the Head Delegate of your University.</p>
                            </div>
                            <br /><br />
                            <p className="bold">Are you a student? Get in touch with your University's Head Delegate.</p>
                            <div className="contact-box">
                                <div style={{ display: "flex", alignItems: "center" }}><img className="contact-icon" src={schoolIcon} alt="University Icon" /><p className="bold">HEAD DELEGATES</p></div>
                                <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                                    {HDInfo.map((HD, index) => {
                                        return (
                                            <div className="delegate-box">
                                                <div className="bold">{HD.uni}</div>
                                                <div>{HD.name}</div>
                                                <div className="bold" >{HD.email}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollableAnchor>
            </React.Fragment>
        )
    }

}