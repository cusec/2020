import React from "react";
import hotOnes from "../assets/images/hot_ones.png";
import speed from "../assets/images/speed_networking.png";
import roast from "../assets/images/resume_roast.png";
import games from "../assets/images/games_night.png";
import pub from "../assets/images/pub_night.png";
import demo from "../assets/images/demo_camp.png";
import lightning from "../assets/images/lightning_talks.png";
import careerFair from "../assets/images/career_fair.png";
import panels from "../assets/images/panels.png";

const EventsDesc = [
	{
		title: "Hot Ones",
		desc: "Participants create groups of 5 to compete against other groups in challenges. Each challenge has a focus whether it is coding and development or design so that all group members can use their strengths. Each new round, participants have to eat a chip with hot sauce on it to make the challenges more difficult. With each round, the hot sauces get hotter and hotter. Sponsors are involved in the rounds by being “guest stars”. Participants are allowed to ask the sponsor at their table for help but the sponsor must eat the hot sauce as well.",
		icon: hotOnes
	},
	{
		title: "Speed-networking",
		desc: "A networking events that follows the rules of speed dating. Each sponsor involved will be set up at a high table. There are 5 minute round that allow for participants to talk to the sponsor at the table they are at. After the 5 minutes are up, the participants are cycled to the next table with the next sponsor. During their time at the tables, participants network as best as they can in the limited time period.",
		icon: speed
	},
	{
		title: "Resume Roast",
		desc: "Think your resume is good… come and really find out. Upload your resume for the resume roast to get expert insight on the dos and don’ts of writing that perfect resume that will get you your dream job. Don’t worry, it's all anonymous and none of your information will be shared!",
		icon: roast
	},
	{
		title: "Games Night",
		desc: "Come meet new friends and break ties with old ones. Play some board games and really prove you’re the best! What better way to network with the sponsors than betting them at a good old fashioned board game.",
		icon: games
	},
	{
		title: "Pub Night",
		desc: "Hit the city with all your friends! Spend some quality time with quality people out in beautiful Montreal! We organized a night at a pub in Montreal for all sponsors and delegates so that you can get some quality time with everyone at CUSEC!",
		icon: pub
	},
	{
		title: "Demo Camp",
		desc: "Have a great idea you want to showcase to the world? Submits your projects and get the opportunity to show it to real professionals and all your peers! A great place to get feedback on what you’re working on and maybe catch the eyes of some amazing people.",
		icon: demo
	},
	{
		title: "Lightning Talks",
		desc: "Ever dream of having a TedTalk? Well now you can! Come and see what everyone is buzzing about! If you have an interesting topic, submit it and get the opportunity to talk about it in front of other delegates and sponsors!",
		icon: lightning
	},
	{
		title: "Career Fair",
		desc: "The perfect opportunity to network with professionals in the field. Go around and gather information on careers, make new connections, and gain valuable insight from the people behind the scenes. Find your next dream job here!",
		icon: careerFair
	},
	{
		title: "Panels",
		desc: "This is your opportunity to get the best advice, tips and tricks from professionals in the field! Feel free to ask questions and push your career in the right direction! The panel will be made up of some of the leading experts in the field. Ask questions and hear great insights on careers and success.",
		icon: panels
	},

]

export default class Events extends React.Component {

	render() {
		return (
			<React.Fragment>
		
					<div className="events-container">
						<div className="center-container center-container-margin">

							<h1>Events</h1>
							<p style={{ fontSize: "2rem", fontWeight: "bolder" }}>
								Check out some of our new events!
							</p>

							<div className="events-section">
								{

									EventsDesc.map(event => {
										console.log(event)
										return (
											<div className="event-container">
												<div className="event-icon">
													<img alt={"event-icon-"+event.title} src={event.icon} className="event-image"></img>
												</div>
												<div className="event-description">
													<p className="event-title">{event.title}</p>
													<p className="event-desc">{event.desc}</p>
												</div>
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


