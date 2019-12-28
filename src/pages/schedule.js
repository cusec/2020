import React from 'react';
import { Table } from 'react-bootstrap';

export default class Schedule extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="events-container">
                    <div className="center-container center-container-margin">
                        <h1>CUSEC Schedule</h1>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th> </th>
                                        <th colSpan="2">Day One (17th)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>

                                    </tr>
                                    {/* <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr> */}
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
                                        <td>1</td>
                                        <td>Mark</td>

                                    </tr>
                                    {/* <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr> */}
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
                                        <td>1</td>
                                        <td>Mark</td>

                                    </tr>
                                    {/* <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr> */}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}