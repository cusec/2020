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
                                    <th colSpan="2">Day One (17th)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8:00 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}><b>Registration</b></td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>8:15 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}>8:00 - 9:30</td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>8:30 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}> </td>
                                    <td style={{ backgroundColor: "#a0977b" }}><b>Light Breakfast</b></td>
                                </tr>
                                <tr>
                                    <td>8:45 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}></td>
                                    <td style={{ backgroundColor: "#a0977b" }}>8:30 - 9:30</td>
                                </tr>
                                <tr>
                                    <td>9:00 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}> </td>
                                    <td style={{ backgroundColor: "#a0977b" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:15 AM</td>
                                    <td style={{ backgroundColor: "#5f8267" }}></td>
                                    <td style={{ backgroundColor: "#a0977b" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:30 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}><b>Opening Remarks</b> </td>
                                    <td style={{ backgroundColor: "#a0977b" }}> </td>
                                </tr>
                                <tr>
                                    <td>9:45 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}>9:30 - 10:00</td>
                                    <td > </td>
                                </tr>
                                <tr>
                                    <td>10:00 AM</td>
                                    <td style={{ backgroundColor: "#c38262" }}></td>
                                    <td > </td>
                                </tr>
                                <tr>
                                    <td>10:15 AM</td>
                                    <td ></td>
                                    <td > </td>
                                </tr>
                                <tr>
                                    <td>10:30 AM</td>
                                    <td ></td>
                                    <td > </td>
                                </tr>
                                <tr>
                                    <td>10:45 AM</td>
                                    <td ></td>
                                    <td > </td>
                                </tr>
                                <tr>
                                    <td>11:00 AM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}><b>Resume Review</b></td>
                                    <td > </td>
                                </tr>
                                <tr>
                                    <td>11:15 AM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td > </td>
                                </tr>
                                <tr>
                                    <td>11:30 AM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td > </td>
                                </tr>
                                <tr>
                                    <td>11:45 AM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td > </td>
                                </tr>
                                <tr>
                                    <td>12:00 PM</td>
                                    <td style={{ backgroundColor: "#8e555a" }}></td>
                                    <td > </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th colSpan="2">Day Two (18th)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8:00 AM</td>
                                    <td>Mark</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th colSpan="2">Day Three (19th)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8:00 AM</td>
                                    <td>Mark</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}