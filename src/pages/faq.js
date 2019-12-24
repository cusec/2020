import React from 'react';
import ScrollableAnchor from "react-scrollable-anchor";

const FAQs = {
    logistics: [
        {
            question: "When and Where is CUSEC Happening?",
            answer: "CUSEC 2020 will be held on January 17, 18 & 19 at Hotel Bonaventure located in Downtown Montreal, QC. More information on the location can be found in The Venue section above."
        },
        {
            question: "Where can I find the conference schedule, speakers & sponsors?",
            answer: "The schedule will be available on the website soon along with our list of speakers and sponsors! We are working around the clock to create the best conference experience for you, promised. "
        },
    ],
}

const FAQList = {
    logistics: [
        {
            question: "When and Where is CUSEC Happening?",
            answer: "CUSEC 2020 will be held on January 17, 18 & 19 at Hotel Bonaventure located in Downtown Montreal, QC. More information on the location can be found in The Venue section above."
        },
        {
            question: "Where can I find the conference schedule, speakers & sponsors?",
            answer: "The schedule will be available on the website soon along with our list of speakers and sponsors! We are working around the clock to create the best conference experience for you, promised. "
        },
    ],
    attendance: [
        {
            question: "Who can attend?",
            answer: "High school, undergraduate and graduate students from all across Canada can attend. Professionals can also purchase a ticket to attend the event."
        },
        {
            question: "What are the costs of attending?",
            answer: "We have always worked hard to keep the ticket price affordable for students. Discounted student tickets are priced at 60$ per unit. Professional tickets retail at 150$."
        },
        {
            question: "How can I get a ticket?",
            answer: "This year we are carrying out an application process. Filling out this application does not guarantee a spot at CUSEC 2020. You will have the opportunity to purchase your ticket for $60 if you are accepted. Find out more on our Facebook page."
        },
        {
            question: "What is the difference between a student ticket & a professional ticket?",
            answer: "If you are still registered as a student at an education institution and have not graduated by January 2020, you can buy a student ticket. Otherwise, the professional ticket is for you! "
        },
        {
            question: "When do applications open?",
            answer: "Applications are already open. Stayed updated on our Facebook page."
        },
        {
            question: "When do applications close?",
            answer: "Applications will be accepted in TWO epochs. Early bird applications close October 12 (23:59 EST), while the final deadline will be October 26 (23:59 EST). If you are from University of New Brunswick, you must submit your application by the early bird deadline."
        },
        {
            question: "When will I hear back about my application?",
            answer: "We'll let you know whether or not your application is accepted as soon as we can. If you applied before the early bird deadline you will hear back sooner! "
        },
        {
            question: "How can I get a refund? Can I re-sell my ticket?",
            answer: "It is strictly forbidden to re-sell a CUSEC ticket above the purchased price. If you cannot attend anymore, reach out to your Head Delegate or through us at info@cusec.net and we will do our best to assist you."
        },
    ],
    transportation: [
        {
            question: "How do I get there?",
            answer: "By air, land or sea. You can drive to the venue, although keep in mind that parking in Downtown montreal is limited. Get in touch with your Head Delegate. They are in the best position to tell you if buses are being organized or if carpooling will be available. Many university delegations from outside of Montreal also travel in groups, so make sure to join up with them for the best CUSEC experience."
        },
        {
            question: "How do I book my hotel room? How much does it cost?",
            answer: "More information will be provided if your application is accepted. Feel free to also contact your Head Delegate around this time for more information. "
        },

    ]
}

export default class FAQ extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ScrollableAnchor id={"faq"}>
                    <div className="venue-conatiner">
                        <div className="center-container">

                            <h1>FAQ</h1>
                            <p>Here are some frequently asked questions. Don’t see yours on the list? Email info@cusec.net.</p>
                            <p className="faq-category">Logistics</p>
                            <div className="faq-section">
                                {
                                    FAQs.logistics.map((faq, index) => {
                                        return (
                                            <div>
                                                <p className="question">{faq.question}</p>
                                                <p className="answer">{faq.answer}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <p className="faq-category">Attendance</p>
                            <div className="faq-section">
                                <div>
                                    <p className="question">Who can attend?</p>
                                    <p className="answer">High school, undergraduate and graduate students from all across Canada can attend. Professionals can also purchase a ticket to attend the event.</p>
                                </div>
                                <div>
                                    <p className="question">What is the difference between a student ticket and a professional ticket?</p>
                                    <p className="answer">If you are still registered as a student at an education institution and have not graduated by January 2020, you can buy a student ticket. Otherwise, the professional ticket is for you!</p>
                                </div>
                                <div>
                                    <p className="question">How can I get a ticket?</p>
                                    <p className="answer">Now that our application process is over, we have opened our remaining but limited tickets to the public. Hence, whether you got accepted or rejected via our application process, or never even applied to begin with, you still have a chance to buy a ticket here by <b>December 25 (23:59 EST)</b>: <a href="https://guestli.st/625575">buy ticket</a>.<br />
                                        If you have never applied via our application process, you also need to fill out the following form to ensure you get your swag by <b>December 25 (23:59 EST)</b>:<a href="https://forms.gle/VUe74PDDiKNmvJwg9"> form</a>.
                                    </p>
                                </div>
                                <div>
                                    <p className="question">What are the costs of attending?</p>
                                    <p className="answer">We have always worked hard to keep the ticket price affordable for students. <b>Student tickets</b> are priced at <b>60$</b> per unit. <b>Professional tickets</b> retail at <b>150$</b>.
                                    </p>
                                </div>
                                <div>
                                    <p className="question">How can I get a refund? Can I re-sell my ticket?</p>
                                    <p className="answer">It is strictly forbidden to re-sell a CUSEC ticket above the purchased price. If you cannot attend anymore, reach out to info@cusec.net (and CC your head delegate if you have one) and we will do our best to assist you.
                                    </p>
                                </div>
                            </div>
                            <p className="faq-category">Transportation {"&"} Stay</p>
                            <div className="faq-section">
                                <div>
                                    <p className="question">How do I get there?</p>
                                    <p className="answer">By air, land or sea.<br />
                                        If your university has a head delegate, you can request to travel with your delegation by filling out the following form by <b>December 25 (23:59 EST)</b>: <a href="https://forms.gle/94LQaA3dLAfNyDBt6"> form</a>. Your head delegate will provide you with more information (e.g. costs, method of transport). <br />
                                        However, if your university does not have a head delegate and you wish to travel with a group, you can email <b>info@cusec.net</b> so that we can connect you with the head delegate of the closest university. <br />
                                        You can also drive to the venue, although keep in mind that parking in Downtown montreal is limited.
                                    </p>
                                </div>
                                <div>
                                    <p className="question">How do I book my hotel room? How much does it cost?</p>
                                    <p className="answer">Whether your university has a head delegate or not, you will have the option of staying at the venue. <br />
                                        You can submit your request for a hotel room, along with your preferred roommates, by filling out the following form by <b>December 25 (23:59 EST)</b>: <a href="https://forms.gle/94LQaA3dLAfNyDBt6"> form</a>. Note that a quad room will cost <b>$144/night plus tax</b> <b>($171/night total)</b>. Since 4 people will share that quad room, you can split that cost.  <br />
                                        However, if your university does not have a head delegate and you wish to travel with a group, you can email <b>info@cusec.net</b> so that we can connect you with the head delegate of the closest university. <br />
                                        For members of the UNB and Manitoba delegation, transport and accommodation is being organized separately.<br />
                                        Feel free to also contact your Head Delegate for more information.
                                    </p>
                                </div>
                                <div>
                                    <p className="question">What meals are we provided during our stay?</p>
                                    <p className="answer">Breakfast will be available to delegates that have bought a ticket to attend. Although we will not be providing lunch or dinner, there are various locations nearby. Here’s a chance to explore Montreal! 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollableAnchor>
            </React.Fragment>
        )
    }

}