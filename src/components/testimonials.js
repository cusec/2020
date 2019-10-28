import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Richard from "../assets/images/richard.png";

const temp = [
    {
        name: "Richard Gate",
        affiliation: "CommuniG8 Ltd Employee & Keynote Speaker (CUSEC 2012)",
        years: "2011 - 2017",
        type: "Speaker (2013)",
        testimonial: "I very much enjoyed my visits to Montreal and CUSEC. It was a pleasant change to attend a conference where I was not being sold a product but rather actually got to hear about real world issues in Software Engineering and to meet Canadians. I look forward to the time when I can get back there. I would really enjoy being a presenter again."
    }
]

const testimonialData = [
    {
        name: "Richard Gate",
        affiliation: "CommuniG8 Ltd Employee & Keynote Speaker (CUSEC 2013)",
        years: "2011 - 2017",
        type: "Speaker (2013)",
        testimonial: "I very much enjoyed my visits to Montreal and CUSEC. It was a pleasant change to attend a conference where I was not being sold a product but rather actually got to hear about real world issues in Software Engineering and to meet Canadians. I look forward to the time when I can get back there. I would really enjoy being a presenter again.",
        cusecs: "7",
    },
    {
        name: "Jacob Majcan",
        affiliation: "Student at University of New Brunswick",
        years: "2018 - 2019",
        type: "Student Delegate",
        testimonial: "Great speakers with a lot of options, games night was super fun. Awesome amount of companies for the career fair. The career fair could use companies from more areas i.e. companies in Western Canada or Eastern Canada.",
        cusecs: "2"
    },
    {
        name: "Jeffrey",
        affiliation: "Graduate from University of Ottawa (2012)",
        years: "2009 - 2019",
        type: "Student Delegate",
        testimonial: "Great conference. Been attending every year since 2009 and, even though I'm not a student anymore, the conference has great keynote speakers that I haven't seen anywhere else in Canada!",
        cusecs: "10"

    },
    {
        name: "Taylor Simpson",
        affiliation: "Student at Queen's University",
        years: "2017 - 2019",
        type: "Student Delegate",
        testimonial: "Attending CUSEC was one of the highlights of my university experience. It was a great way to gain exposure to and connect with the Canadian tech community. The passion of the speakers, sponsors and delegates always rekindled the excitement I felt when I first started programming.",
        cusecs: "3"
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
                                <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
                                    <img src={Richard} style={{width:"40%", minWidth:150}} alt="richard"></img>
                                    <div style={{width:"100%", maxWidth:300}}>
                                        <div className="tml-name">{tml.name}</div>
                                        <div className="tml-affiliation">{tml.affiliation}</div>
                                        <div className="tml-quote">{tml.testimonial}</div>
                                        <div className="tml-years">CUSECs Attended: {tml.cusecs} ({tml.years})</div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </React.Fragment>
        );
    }
}