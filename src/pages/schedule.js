import React from 'react';
import { Table } from 'react-bootstrap';

export default class Schedule extends React.Component {
    componentDidMount() {
		window.scrollTo(0, 0);
	}
    render() {
        return (
            <React.Fragment>
                <div className="events-container">
                    <div className="center-container center-container-margin">
                        <h1>CUSEC Schedule</h1>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th colSpan="3">Day One (17th)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8:00 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}><b>Registration</b></td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>8:15 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}>8:00 - 9:30</td>
                                    <td colSpan="2" style={{ backgroundColor: "#a0977b" }}> <b>Light Breakfast</b></td>
                                </tr>
                                <tr>
                                    <td>8:30 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}> </td>
                                    <td colSpan="2" style={{ backgroundColor: "#a0977b" }}>8:15 - 9:30</td>
                                </tr>
                                <tr>
                                    <td>8:45 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}></td>
                                    <td colSpan="2" style={{ backgroundColor: "#a0977b" }}></td>
                                </tr>
                                <tr>
                                    <td>9:00 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}> </td>
                                    <td colSpan="2" style={{ backgroundColor: "#a0977b" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:15 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}></td>
                                    <td colSpan="2" style={{ backgroundColor: "#a0977b" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:30 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}><b>Opening Remarks</b> </td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>9:45 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}>9:30 - 10:00</td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>10:00 AM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}> <b>Keynote: Kate Gregory</b></td>
                                </tr>
                                <tr>
                                    <td>10:15 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}>10:00 - 11:00</td>
                                </tr>
                                <tr>
                                    <td>10:30 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}> </td>
                                </tr>
                                <tr>
                                    <td>10:45 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}> </td>
                                </tr>
                                <tr>
                                    <td>11:00 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}><b>Invited: Andre Gauthier</b></td>
                                </tr>
                                <tr>
                                    <td>11:15 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}> 11:00 - 11:20</td>
                                </tr>
                                <tr>
                                    <td>11:30 AM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}> <b>Invited: Kristina Balaam</b></td>
                                </tr>
                                <tr>
                                    <td>11:45 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}> 11:20 – 11:40</td>
                                </tr>
                                <tr>
                                    <td>12:00 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}><b>Resume Review</b></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}> <b>Workshop: Kinaxis</b></td>
                                </tr>
                                <tr>
                                    <td>12:15 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}>12:00 - 1:00</td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}>12:00 - 1:00</td>
                                </tr>
                                <tr>
                                    <td>12:30 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}> </td>
                                </tr>
                                <tr>
                                    <td>12:45 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}> </td>
                                </tr>
                                <tr>
                                    <td>1:00 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}><b>Lunch Break</b></td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>1:15 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}>1:00 - 2:00</td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>1:30 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}></td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>1:45 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}></td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>2:00 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}><b>Career Fair</b></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}><b>Workshop: RBC</b></td>
                              
                                </tr>
                                <tr>
                                    <td>2:15 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}>2:00 - 4:00</td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}>2:00 - 3:30 </td>
                             
                                </tr>
                                <tr>
                                    <td>2:30 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }} ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}> </td>
                                
                                </tr>
                                <tr>
                                    <td>2:45 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td style={{backgroundColor:"#1C5898"}}> </td>
                                    <td style={{ backgroundColor: "#8e555a" }}><b>Demo Camp</b></td>
                                </tr>
                                <tr>
                                    <td>3:00 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td style={{backgroundColor:"#1C5898"}}> </td>
                                    <td style={{ backgroundColor: "#8e555a" }}>2:45 - 3:30</td>
                                </tr>
                                <tr>
                                    <td>3:15 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td style={{backgroundColor:"#1C5898"}}> </td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                </tr>
                                <tr>
                                    <td>3:30 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3:45 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>4:00 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}><b>Keynote: Puneet Mulchandani</b></td>
                                </tr>
                                <tr>
                                    <td>4:15 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}>4:00 - 5:00</td>
                                </tr>
                                <tr>
                                    <td>4:30 PM</td>
                                    <td  ></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}> </td>
                                </tr>
                                <tr>
                                    <td>4:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2"  style={{backgroundColor:"#5db5a6"}}> </td>
                                </tr>
                                <tr>
                                    <td>5:00 PM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}> <b>Invited: Jackie Chi Kit Cheung</b></td>
                                </tr>
                                <tr>
                                    <td>5:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}>5:00 - 5:20 </td>
                                </tr>
                                <tr>
                                    <td>5:30 PM</td>
                                    <td ></td>
                                    <td colSpan="2"  style={{backgroundColor:"#4d9c8f"}}> <b>Invited: Erica Engle</b></td>
                                </tr>
                                <tr>
                                    <td>5:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2"  style={{backgroundColor:"#4d9c8f"}}>5:20 - 5:40 </td>
                                </tr>
                                <tr>
                                    <td>6:00 PM</td>
                                    <td ></td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>6:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>6:30 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>6:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>7:00 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>7:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>7:30 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>7:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>8:00 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> <b>Mystery (Sober) Event</b></td>
                                </tr>
                                <tr>
                                    <td>8:15 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> 8:00 - 10:00</td>
                                </tr>
                                <tr>
                                    <td>8:30 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> </td>
                                </tr>
                                <tr>
                                    <td>8:45 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:00 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}><b>Pub Night</b></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:15 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}>9:00 - 11:00</td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:30 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:45 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> </td>
                                </tr>
                                <tr>
                                    <td>10:00 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td>10:15 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>10:30 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>10:45 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>11:00 PM</td>
                                    <td></td>
                                    <td colSpan="2" > </td>
                                </tr>
                            </tbody>
                        </Table>
                        <br/><br/><br/><br/>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th colSpan="3">Day Two (18th)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8:00 AM</td>
                                    <td></td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>8:15 AM</td>
                                    <td  style={{ backgroundColor: "#a0977b" }}> <b>Breakfast</b></td>
                                    <td colSpan="2"></td>
                                    
                                </tr>
                                <tr>
                                    <td>8:30 AM</td>
                                    <td  style={{ backgroundColor: "#a0977b" }}>8:15 - 9:45</td>
                                    <td colSpan="2"></td>
                                   
                                </tr>
                                <tr>
                                    <td>8:45 AM</td>
                                    <td style={{ backgroundColor: "#a0977b" }}></td>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td>9:00 AM</td>
                                    <td style={{ backgroundColor: "#a0977b" }}></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}><b>Speed Networking</b></td>
                                </tr>
                                <tr>
                                    <td>9:15 AM</td>
                                    <td style={{ backgroundColor: "#a0977b" }}></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}>9:00 - 10:00</td>
                                </tr>
                                <tr>
                                    <td>9:30 AM</td>
                                    <td style={{ backgroundColor: "#a0977b" }}></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:45 AM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>10:00 AM</td>
                                    <td></td>
                                    <td colspan="2" style={{backgroundColor:"#5db5a6"}}><b>Keynote: Mayuko Inoue</b></td>
                                </tr>
                                <tr>
                                    <td>10:15 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}>10:00 - 11:00</td>
                                </tr>
                                <tr>
                                    <td>10:30 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}> </td>
                                </tr>
                                <tr>
                                    <td>10:45 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}> </td>
                                </tr>
                                <tr>
                                    <td>11:00 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}><b>Career Fair</b></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}><b>Workshop: Amazon</b></td>
                                </tr>
                                <tr>
                                    <td>11:15 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}>11:00 - 12:00</td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}> 11:00 - 12:00</td>
                                </tr>
                                <tr>
                                    <td>11:30 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}></td>
                                </tr>
                                <tr>
                                    <td>11:45 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}></td>
                                </tr>
                                <tr>
                                    <td>12:00 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}><b>Lunch Break</b></td>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td>12:15 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}>12:00 - 1:00</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>12:30 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>12:45 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> <b>Lightning Talks (3)</b></td>
                                </tr>
                                <tr>
                                    <td>1:00 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}><b>Workshop: CSE</b></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}>12:45 - 1:15 </td>
                                </tr>
                                <tr>
                                    <td>1:15 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}>1:00 - 1:45</td>
                                    <td colspan="2" style={{backgroundColor:"#4d9c8f"}}><b>Invited: Kate Arthur</b> </td>
                                </tr>
                                <tr>
                                    <td>1:30 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}></td>
                                    <td colspan="2" style={{backgroundColor:"#4d9c8f"}}>1:15 - 1:35 </td>
                                </tr>
                                <tr>
                                    <td>1:45 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}><b>Invited: Nicolas Cuillery</b></td>
                                </tr>
                                <tr>
                                    <td>2:00 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}>1:35 - 2:05</td>
                              
                                </tr>
                                <tr>
                                    <td>2:15 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}><b>Career Fair</b></td>
                                    <td colspan="2" style={{backgroundColor:"#1C5898"}}><b>Workshop: CAE inc.</b> </td>
                             
                                </tr>
                                <tr>
                                    <td>2:30 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }} >2:15 - 3:15</td>
                                    <td colspan="2" style={{backgroundColor:"#1C5898"}}>2:15 - 3:15</td>
                                
                                </tr>
                                <tr>
                                    <td>2:45 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }} ></td>
                                    <td colspan="2" style={{backgroundColor:"#1C5898"}}> </td>
                                </tr>
                                <tr>
                                    <td>3:00 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }} ></td>
                                    <td colspan="2" style={{backgroundColor:"#1C5898"}}></td>
                                </tr>
                                <tr>
                                    <td>3:15 PM</td>
                                    <td style={{backgroundColor:"#4d9c8f"}}><b>Invited: Phillip Williams</b></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>3:30 PM</td>
                                    <td style={{backgroundColor:"#4d9c8f"}}>3:15 - 3:35</td>
                                    <td colspan="2" style={{backgroundColor:"#4d9c8f"}}><b>Invited: Megan Doherty</b> </td>
                                </tr>
                                <tr>
                                    <td>3:45 PM</td>
                                   <td></td>
                                   <td colspan="2" style={{backgroundColor:"#4d9c8f"}}>3:35 - 3:55 </td>
                                </tr>
                                <tr>
                                    <td>4:00 PM</td>
                                    <td></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>4:15 PM</td>
                                    <td></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>4:30 PM</td>
                                    <td></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>4:45 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}><b>Hot Ones Challenge</b></td>
                                </tr>
                                <tr>
                                    <td>5:00 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}>4:45 - 6:00</td>
                                </tr>
                                <tr>
                                    <td>5:15 PM</td>
                                    <td ></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>5:30 PM</td>
                                    <td ></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}></td>
                                </tr>
                                <tr>
                                    <td>5:45 PM</td>
                                    <td ></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>6:00 PM</td>
                                    <td ></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>6:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>6:30 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>6:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>7:00 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>7:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>7:30 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>7:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>8:00 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}><b>Games Night</b></td>
                                </tr>
                                <tr>
                                    <td>8:15 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}>8:00 - 10:00</td>
                                </tr>
                                <tr>
                                    <td>8:30 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>8:45 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:00 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:15 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:30 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:45 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>10:00 PM</td>
                                    <td></td>
                                    <td colspan="2"> </td>
                                </tr>
                                <tr>
                                    <td>10:15 PM</td>
                                    <td></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>10:30 PM</td>
                                    <td></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>10:45 PM</td>
                                    <td></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>11:00 PM</td>
                                    <td></td>
                                    <td colSpan="2" > </td>
                                </tr>
                            </tbody>
                        </Table>
                        <br/><br/><br/><br/>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th colSpan="3">Day Three (19th)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8:00 AM</td>
                                    <td></td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>8:15 AM</td>
                                    <td  style={{ backgroundColor: "#a0977b" }}> <b>Breakfast</b></td>
                                    <td colSpan="2"></td>
                                    
                                </tr>
                                <tr>
                                    <td>8:30 AM</td>
                                    <td  style={{ backgroundColor: "#a0977b" }}>8:15 - 9:45</td>
                                    <td colSpan="2"></td>
                                   
                                </tr>
                                <tr>
                                    <td>8:45 AM</td>
                                    <td style={{ backgroundColor: "#a0977b" }}></td>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td>9:00 AM</td>
                                    <td style={{ backgroundColor: "#a0977b" }}></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}><b>Volunteer Info Session</b></td>
                                </tr>
                                <tr>
                                    <td>9:15 AM</td>
                                    <td style={{ backgroundColor: "#a0977b" }}></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}>9:00 - 10:00</td>
                                </tr>
                                <tr>
                                    <td>9:30 AM</td>
                                    <td style={{ backgroundColor: "#a0977b" }}></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:45 AM</td>
                                    <td style={{ backgroundColor: "#a0977b" }}></td>
                                    <td colspan="2" style={{backgroundColor:"#5db5a6"}}><b>Keynote: Toria Gibbs</b></td>
                                </tr>
                                <tr>
                                    <td>10:00 AM</td>
                                    <td></td>
                                    <td colspan="2" style={{backgroundColor:"#5db5a6"}}>9:45 - 10:45</td>
                                </tr>
                                <tr>
                                    <td>10:15 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}></td>
                                </tr>
                                <tr>
                                    <td>10:30 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#5db5a6"}}> </td>
                                </tr>
                                <tr>
                                    <td>10:45 AM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}><b>Panel</b></td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>11:00 AM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}>10:45 - 11:45</td>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td>11:15 AM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td>11:30 AM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td>11:45 AM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> <b>Lightning Talks (3)</b></td>
                                </tr>
                                <tr>
                                    <td>12:00 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}><b>Lunch Break</b></td>
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> 11:45 - 12:15</td>
                                </tr>
                                <tr>
                                    <td>12:15 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}>12:00 - 1:00</td>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td>12:30 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>12:45 PM</td>
                                    <td style={{ backgroundColor: "#649edc" }}></td>
                                    <td colSpan="2"></td>
                                </tr>
                                <tr>
                                    <td>1:00 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{backgroundColor:"#4d9c8f"}}><b>Invited: Angelo Pengue</b> </td>
                                </tr>
                                <tr>
                                    <td>1:15 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{backgroundColor:"#4d9c8f"}}>1:00 - 1:20 </td>
                                </tr>
                                <tr>
                                    <td>1:30 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}><b>Workshop: Shopify</b> </td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}><b>Invited: Maude Lemaire</b></td>
                                </tr>
                                <tr>
                                    <td>1:45 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}>1:30 - 2:30</td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}>1:20 - 1:40</td>
                                </tr>
                                <tr>
                                    <td>2:00 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}></td>
                                    <td colSpan="2" style={{ backgroundColor: "#c38262" }}><b>Career Fair</b></td>
                              
                                </tr>
                                <tr>
                                    <td>2:15 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}></td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}>2:00 - 4:30</td>
                             
                                </tr>
                                <tr>
                                    <td>2:30 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}><b>Diversity Discussion</b></td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                
                                </tr>
                                <tr>
                                    <td>2:45 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}>2:30-3:30</td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                </tr>
                                <tr>
                                    <td>3:00 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                </tr>
                                <tr>
                                    <td>3:15 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                </tr>
                                <tr>
                                    <td>3:30 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}><b>Workshop: Wish</b> </td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}> </td>
                                </tr>
                                <tr>
                                    <td>3:45 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}>3:30 - 4:30</td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                </tr>
                                <tr>
                                    <td>4:00 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}></td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                </tr>
                                <tr>
                                    <td>4:15 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}></td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                </tr>
                                <tr>
                                    <td>4:30 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{backgroundColor:"#4d9c8f"}}><b>Invited: Abdou Sarr</b> </td>
                                </tr>
                                <tr>
                                    <td>4:45 PM</td>
                                    <td style={{backgroundColor:"#4d9c8f"}}><b>Invited: Forest Anderson</b></td>
                                    <td colspan="2" style={{backgroundColor:"#4d9c8f"}}>4:30 - 4:50</td>
                                </tr>
                                <tr>
                                    <td>5:00 PM</td>
                                    <td style={{backgroundColor:"#4d9c8f"}}>4:50 - 5:10</td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}><b>Invited: Princejeet Singh Sandhu</b></td>
                                </tr>
                                <tr>
                                    <td>5:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#4d9c8f"}}>5:10 - 5:30 </td>
                                </tr>
                                <tr>
                                    <td>5:30 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}><b>Closing Ceremony</b> </td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>5:45 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}>5:30 - 6:00</td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>6:00 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>6:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>6:30 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}