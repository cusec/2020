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

export default class FAQ extends React.Component {
    render() {
        return (
            <React.Fragment>
        
                    <div id="faq" className="venue-conatiner scroll-offset ">
                        <div className="center-container">

                            <h1>FAQ</h1>
                            <p>Here are some frequently asked questions. Don’t see yours on the list? Email <a className="faq-links" href="mailto:info@cusec.net">info@cusec.net</a>.</p>
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
                                    <p className="question">Who can attend? What are the costs of attending?</p>
                                    <p className="answer">High school, undergraduate and graduate students from all across Canada are all welcome to attend. If you are still registered as a student at an education institution and have not graduated by January 2020, you can buy a <b>student ticket</b> at <b>60$</b>. We have always strived to keep the ticket price affordable for students.</p>
                                    <p className="answer">Otherwise, the professional ticket is for you! We sell <b>professional tickets</b> at <b>150$</b>.</p>
                                </div>
                                <div>
                                    <p className="question">How can I get a ticket?</p>
                                    <p className="answer">Now that our application process is over, we have opened our remaining but limited tickets to the public. Hence, whether you got accepted or rejected via our application process, or never even applied to begin with, you still have a chance to buy a ticket <a className="faq-links" href="https://guestli.st/625575">here</a> by <b>December 25 (23:59 EST)</b>.</p>
                                    <p className="answer">If you have never applied via our application process, you will also need to fill out the <a className="faq-links" href="https://forms.gle/VUe74PDDiKNmvJwg9">following form</a> by <b>December 25 (23:59 EST)</b> to ensure you get your swag.</p>
                                </div>
                                <div>
                                    <p className="question">How can I get a refund? Can I re-sell my ticket?</p>
                                    <p className="answer">It is strictly forbidden to re-sell a CUSEC ticket above the purchased price. If you cannot attend anymore, reach out to <a className="faq-links" href="mailto:info@cusec.net">info@cusec.net</a> and CC your head delegate if you have one. We will do our best to assist you. <br/>
                                    Tickets can only be refunded within 30 days of purchase. Otherwise, if you have bought your ticket recently, we have set the deadline for refund requests to be <b>December 28th</b>.
                                    </p>
                                </div>
                            </div>
                            <p className="faq-category">Transportation {"&"} Stay</p>
                            <div className="faq-section">
                                <div>
                                    <p className="question">How do I get there?</p>
                                    <p className="answer">By air, land or sea! If your university has a head delegate, you can request to travel with your delegation by filling out the <a className="faq-links" href="https://forms.gle/94LQaA3dLAfNyDBt6">following form</a> by <b>December 25 (23:59 EST)</b>. Your head delegate will provide you with more information (e.g. costs, method of transport).</p>
                                    <p className="answer">However, if your university does not have a head delegate and you wish to travel with a group, you can email <a className="faq-links" href="mailto:info@cusec.net">info@cusec.net</a> so that we can connect you with the head delegate of the closest university.</p>
                                    <p className="answer">You can also drive to the venue, although keep in mind that parking in Downtown Montreal is limited.</p>
                                </div>
                                <div>
                                    <p className="question">How do I book my hotel room? How much does it cost?</p>
                                    <p className="answer">Whether your university has a head delegate or not, you will have the option of staying at the venue. You can submit your request for a hotel room, along with your preferred roommates, by filling out the <a className="faq-links" href="https://forms.gle/94LQaA3dLAfNyDBt6">following form</a> by <b>December 25 (23:59 EST)</b>. Note that a quad room will cost <b>$144/night plus tax</b> <b>($171/night total)</b>. Since 4 people will share that quad room, you can split that cost.</p>
                                    <p className="answer">For members of the UNB and Manitoba delegation, transport and accommodation is being organized separately. If your university does not have a head delegate and you wish to travel with a group, you can email <a className="faq-links" href="mailto:info@cusec.net">info@cusec.net</a> so that we can connect you with the head delegate of the closest university.</p>
                                </div>
                                <div>
                                    <p className="question">What meals are we provided during our stay?</p>
                                    <p className="answer">Breakfast will be available to delegates that have bought a ticket to attend. Although we will not be providing lunch or dinner, there are various locations nearby. Here’s a chance to explore Montreal! 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
       
            </React.Fragment>
        )
    }

}