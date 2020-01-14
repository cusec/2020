import React from 'react';
import { Table } from 'react-bootstrap';

export default class Schedule extends React.Component {
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
                                    <td colSpan="2" style={{ backgroundColor: "#a0977b" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:45 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}>9:30 - 10:00</td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>10:00 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}> <b>Keynote: Kate Gregory</b></td>
                                </tr>
                                <tr>
                                    <td>10:15 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}>10:00 - 11:00</td>
                                </tr>
                                <tr>
                                    <td>10:30 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}> </td>
                                </tr>
                                <tr>
                                    <td>10:45 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}> </td>
                                </tr>
                                <tr>
                                    <td>11:00 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}><b>Invited: Andre Gauthier</b></td>
                                </tr>
                                <tr>
                                    <td>11:15 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}> 11:00 - 11:30</td>
                                </tr>
                                <tr>
                                    <td>11:30 AM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}> <b>Invited: Kristina Balaam</b></td>
                                </tr>
                                <tr>
                                    <td>11:45 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}> 11:30 – 12:00</td>
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
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>12:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
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
                                    <td style={{backgroundColor:"#1C5898"}}> </td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                </tr>
                                <tr>
                                    <td>3:45 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td colSpan="2"> </td>
                                </tr>
                                <tr>
                                    <td>4:00 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}><b>Keynote: Puneet Mulchandan</b></td>
                                </tr>
                                <tr>
                                    <td>4:15 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}>4:00 - 5:00</td>
                                </tr>
                                <tr>
                                    <td>4:30 PM</td>
                                    <td  ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}> </td>
                                </tr>
                                <tr>
                                    <td>4:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2"  style={{backgroundColor:"#1E67B5"}}> </td>
                                </tr>
                                <tr>
                                    <td>5:00 PM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}> <b>Invited: Jackie Chi Kit Cheung</b></td>
                                </tr>
                                <tr>
                                    <td>5:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}>5:00 - 5:30 </td>
                                </tr>
                                <tr>
                                    <td>5:30 PM</td>
                                    <td ></td>
                                    <td colSpan="2"  style={{backgroundColor:"#1E67B5"}}> <b>Invited: Erica Engle</b></td>
                                </tr>
                                <tr>
                                    <td>5:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2"  style={{backgroundColor:"#1E67B5"}}>5:30 - 6:00 </td>
                                </tr>
                                <tr>
                                    <td>6:00 PM</td>
                                    <td ></td>
                                    <td colSpan="2"  style={{backgroundColor:"#1E67B5"}}> </td>
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
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}> </td>
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
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>11:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>11:30 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>11:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>12:00 AM</td>
                                    <td ></td>
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
                                    <td style={{ backgroundColor: "#a0977b" }}></td>
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
                                </tr>
                                <tr>
                                    <td>10:00 AM</td>
                                    <td></td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}><b>Keynote: Mayuko Inoue</b></td>
                                </tr>
                                <tr>
                                    <td>10:15 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}>10:00 - 11:00</td>
                                </tr>
                                <tr>
                                    <td>10:30 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}> </td>
                                </tr>
                                <tr>
                                    <td>10:45 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}> </td>
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
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}></td>
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
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}><b>Invited: Kate Arthur</b> </td>
                                </tr>
                                <tr>
                                    <td>1:30 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}></td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}>1:15 - 1:45 </td>
                                </tr>
                                <tr>
                                    <td>1:45 PM</td>
                                    <td  style={{backgroundColor:"#1C5898"}}></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}><b>Invited: Nicolas Cuillery</b></td>
                                </tr>
                                <tr>
                                    <td>2:00 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}>1:45 - 2:15</td>
                              
                                </tr>
                                <tr>
                                    <td>2:15 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }}><b>Career Fair</b></td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}><b>Workshop: CAE inc.</b> </td>
                             
                                </tr>
                                <tr>
                                    <td>2:30 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }} >2:15 - 3:15</td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}>2:15 - 3:15</td>
                                
                                </tr>
                                <tr>
                                    <td>2:45 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }} ></td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}> </td>
                                </tr>
                                <tr>
                                    <td>3:00 PM</td>
                                    <td style={{ backgroundColor: "#c38262" }} ></td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}></td>
                                </tr>
                                <tr>
                                    <td>3:15 PM</td>
                                    <td style={{backgroundColor:"#1C5898"}}><b>Invited: Phillip Williams</b></td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}></td>
                                </tr>
                                <tr>
                                    <td>3:30 PM</td>
                                    <td style={{backgroundColor:"#1C5898"}}>3:15 - 3:35</td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}><b>Invited: Megan Doherty</b> </td>
                                </tr>
                                <tr>
                                    <td>3:45 PM</td>
                                   <td></td>
                                   <td colspan="2" style={{backgroundColor:"#1E67B5"}}>3:35 - 3:55 </td>
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
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
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
                                    <td colspan="2" style={{ backgroundColor: "#8e555a" }}> </td>
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
                                <tr>
                                    <td>11:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>11:30 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>11:45 PM</td>
                                    <td ></td>
                                    <td colSpan="2" > </td>
                                </tr>
                                <tr>
                                    <td>12:00 AM</td>
                                    <td ></td>
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
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}><b>Keynote: Toria Gibbs</b></td>
                                </tr>
                                <tr>
                                    <td>10:00 AM</td>
                                    <td></td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}>9:45 - 10:45</td>
                                </tr>
                                <tr>
                                    <td>10:15 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}></td>
                                </tr>
                                <tr>
                                    <td>10:30 AM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}> </td>
                                </tr>
                                <tr>
                                    <td>10:45 AM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}><b>Panel</b></td>
                                    <td colSpan="2" style={{backgroundColor:"#1E67B5"}}> </td>
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
                                    <td colSpan="2" style={{ backgroundColor: "#AD787E" }}></td>
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
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}><b>Invited: Angelo Pengue</b> </td>
                                </tr>
                                <tr>
                                    <td>1:15 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}>1:00 - 1:30 </td>
                                </tr>
                                <tr>
                                    <td>1:30 PM</td>
                                    <td  style={{backgroundColor:"#1E67B5"}}><b>Workshop: Shopify</b> </td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}><b>Invited: Maude Lemaire</b></td>
                                </tr>
                                <tr>
                                    <td>1:45 PM</td>
                                    <td  style={{backgroundColor:"#1E67B5"}}>1:30 - 2:00</td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}>1:30 - 2:30</td>
                                </tr>
                                <tr>
                                    <td>2:00 PM</td>
                                    <td  style={{backgroundColor:"#1E67B5"}}></td>
                                    <td colSpan="2" style={{ backgroundColor: "#c38262" }}><b>Career Fair</b></td>
                              
                                </tr>
                                <tr>
                                    <td>2:15 PM</td>
                                    <td  style={{backgroundColor:"#1E67B5"}}></td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}>2:00 - 4:30</td>
                             
                                </tr>
                                <tr>
                                    <td>2:30 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}><b>Diversity Discussion</b></td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                
                                </tr>
                                <tr>
                                    <td>2:45 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
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
                                    <td  style={{backgroundColor:"#1E67B5"}}><b>Workshop: Wish</b> </td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}> </td>
                                </tr>
                                <tr>
                                    <td>3:45 PM</td>
                                    <td  style={{backgroundColor:"#1E67B5"}}>3:30 - 4:30</td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                </tr>
                                <tr>
                                    <td>4:00 PM</td>
                                    <td  style={{backgroundColor:"#1E67B5"}}></td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                </tr>
                                <tr>
                                    <td>4:15 PM</td>
                                    <td  style={{backgroundColor:"#1E67B5"}}></td>
                                    <td  colSpan="2" style={{ backgroundColor: "#c38262" }}></td>
                                </tr>
                                <tr>
                                    <td>4:30 PM</td>
                                    <td  style={{backgroundColor:"#1E67B5"}}></td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}><b>Invited: Abdou Sarr</b> </td>
                                </tr>
                                <tr>
                                    <td>4:45 PM</td>
                                    <td></td>
                                    <td colspan="2" style={{backgroundColor:"#1E67B5"}}>4:30 - 4:50</td>
                                </tr>
                                <tr>
                                    <td>5:00 PM</td>
                                    <td></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}><b>Invited: Forest Anderson</b></td>
                                </tr>
                                <tr>
                                    <td>5:15 PM</td>
                                    <td ></td>
                                    <td colSpan="2" style={{backgroundColor:"#1C5898"}}>4:50 - 5:10 </td>
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