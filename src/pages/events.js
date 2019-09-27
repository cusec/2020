import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const EventsDesc = [
	{
		title: "Hot Ones",
		desc: "Participants create groups of 5 to compete against other groups in challenges. Each challenge has a focus whether it is coding and development or design so that all group members can use their strengths. Each new round, participants have to eat a chip with hot sauce on it to make the challenges more difficult. With each round, the hot sauces get hotter and hotter. Sponsors are involved in the rounds by being “guest stars”. Participants are allowed to ask the sponsor at their table for help but the sponsor must eat the hot sauce as well."
	},
	{
		title: "Speed-networking",
		desc: "A networking events that follows the rules of speed dating. Each sponsor involved will be set up at a high table. There are 5 minute round that allow for participants to talk to the sponsor at the table they are at. After the 5 minutes are up, the participants are cycled to the next table with the next sponsor. During their time at the tables, participants network as best as they can in the limited time period."
	},
	// {
	// 	title: "Scavenger Hunt",
	// 	desc: "A scavenger hunt set up like the amazing race. All participants start in a room and are given the first clue. Each clue leads to the next using a riddle that the participants must figure out. The answer to the riddle is the location of the next clue. The clues will be spread out all across the hotel. Ultimately they lead to the finish line. The first group wins to find the location of the finish line wins!"
	// }
]

class Events extends Component {

	render() {
		return (
			<React.Fragment>
				<ScrollableAnchor id={"events"}>
					<div className="events-container">
						<div className="center-container">

							<h1>Events</h1>
							<p className="bold">
								Check out some of our new events! More event descriptions coming shortly.							
							</p>

							<div className="events-section">
								{

									EventsDesc.map(event => {
										console.log(event)
										return (
											<div>
												<p className="event-title">{event.title}</p>
												<p className="event-desc">{event.desc}</p>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</ScrollableAnchor>
			</React.Fragment>
		)
	}
}

export default Events;
