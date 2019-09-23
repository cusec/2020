import React from 'react';

const FAQList = {
    logistics: [
        {
            question: "When and Where is CUSEC Happening?",
            answer: "CUSEC 2020 will be held on January 17, 18 & 19 at Hotel Bonaventure located in downtown Montreal, QC. More information on the location can be found in The Venue section above."
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
            answer: "The schedule will be available on the website soon along with our list of speakers and sponsors! We are working around the clock to create the best conference experience for you, promised. "
        },
        {
            question: "When do applications open?",
            answer: "The schedule will be available on the website soon along with our list of speakers and sponsors! We are working around the clock to create the best conference experience for you, promised. "
        },
        {
            question: "When do applications close?",
            answer: "The schedule will be available on the website soon along with our list of speakers and sponsors! We are working around the clock to create the best conference experience for you, promised. "
        },
        {
            question: "Does submitting an application guarantee me a spot?",
            answer: "The schedule will be available on the website soon along with our list of speakers and sponsors! We are working around the clock to create the best conference experience for you, promised. "
        },
        {
            question: "When will I hear back about my application?",
            answer: "The schedule will be available on the website soon along with our list of speakers and sponsors! We are working around the clock to create the best conference experience for you, promised. "
        },
    ],
    transportation: [
        {
            question: "How do I get there?",
            answer: "By air, land or sea. You can drive to the venue, although keep in mind that parking in Downtown montreal is limited. Get in touch with your Head Delegate. They are in the best position to tell you if buses are being organized or if carpooling will be available. Many university delegations from outside of Montreal also travel in groups, so make sure to join up with them for the best CUSEC experience."
        },
        {
            question: "How do I book my hotel room? How much does it cost?",
            answer: "The schedule will be available on the website soon along with our list of speakers and sponsors! We are working around the clock to create the best conference experience for you, promised. "
        },

    ]
}

export default class FAQ extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="venue-conatiner">
                    <div className="center-container">

                        <h1>FAQ</h1>
                        <p className="bold">Here are some frequently asked questions. Don’t see yours on the list? Email info@cusec.net.</p>
                        <p className="faq-category">Logistics</p>
                        <div className="faq-section">
                            {
                                FAQList.logistics.map((faq,index) => {
                                    return (
                                        <div>
                                            <p className="question">{faq.question}</p>
                                            <p className="answer">{faq.answer}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}