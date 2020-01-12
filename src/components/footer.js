import React from "react";
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="footer-container">
                    <Link  to={{
                                pathname: "/codeofconduct",
                                state: {
                                    fromNavBar: true
                                }
                            }}><p>Code of Conduct</p></Link>
                    <p>copyright © 2020 CUSEC. all rights reserved.</p>
                </div>
            </React.Fragment>
        );
    }
}