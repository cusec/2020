import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const temp=[
    {
        name: "Richard Gate",
        affiliation: "CommuniG8 Ltd",
        years: "2011 - 2017",
        type: "Speaker (2013)",
        testimonial: "I very much enjoyed my visits to Montreal and CUSEC. It was a pleasant change to attend a conference where I was not being sold a product but rather actually got to hear about real world issues in Software Engineering and to meet Canadians. I look forward to the time when I can get back there. I would really enjoy being a presenter again."
    }
]

const testimonialData = [
    {
        name: "Richard Gate",
        affiliation: "CommuniG8 Ltd",
        years: "2011 - 2017",
        type: "Speaker (2013)",
        testimonial: "I very much enjoyed my visits to Montreal and CUSEC. It was a pleasant change to attend a conference where I was not being sold a product but rather actually got to hear about real world issues in Software Engineering and to meet Canadians. I look forward to the time when I can get back there. I would really enjoy being a presenter again."
    },
    {
        name: "Jacob Majcan",
        affiliation: "UNB",
        years: "2018 - 2019",
        type: "Student Delegate",
        testimonial: "Great speakers with a lot of options, games night was super fun. Awesome amount of companies for the career fair. The career fair could use companies from more areas i.e. companies in Western Canada or Eastern Canada."
    },
    {
        name: "Jeffrey",
        affiliation: "Graduate from uOttawa in 2012",
        years: "2009 - 2019",
        type: "Student Delegate",
        testimonial: "Great conference. Been attending every year since 2009 and, even though I'm not a student anymore, the conference has great keynote speakers that I haven't seen anywhere else in Canada!"
    },
    {
        name: "Taylor Simpson",
        affiliation: "Queen's University",
        years: "2017 - 2019",
        type: "Student Delegate",
        testimonial: "Attending CUSEC was one of the highlights of my university experience. It was a great way to gain exposure to and connect with the Canadian tech community. The passion of the speakers, sponsors and delegates always rekindled the excitement I felt when I first started programming."
    },
]


export default class Testimonial extends React.Component {

    render() {
        return (
            
            <React.Fragment>
                <Carousel>
                {temp.map((tml, index) => {
                    return (
                        <Carousel.Item>
                            <div>{tml.name}</div>
                            <div>{tml.affiliation}</div>
                            <div>{tml.years}</div>
                            <div>{tml.type}</div>
                            <div>{tml.testimonial}</div>
                        </Carousel.Item>
                    )
                })}
                </Carousel>
            </React.Fragment>
        );
    }
}