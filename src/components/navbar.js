import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import "../styles/navbar.css";

export default class NavMenu extends React.Component {
    render() {
        return (
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                {/* <Navbar.Brand href="/#home">CUSEC 2020</Navbar.Brand> */}
                <Link smooth to="/#cusec"><div className="navbar-brand">CUSEC 2020</div></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "flex-end" }}>
                    <div className="navbar-nav">
                        {/* <a href="/#about" role="tab" data-rb-event-key="/#about" tabindex="-1" aria-selected="false" className="nav-link">About</a>
                        <a href="/#venue" role="tab" data-rb-event-key="/#venue" tabindex="-1" aria-selected="false" className="nav-link">Venue</a>
                        <a href="/#sponsors" role="tab" data-rb-event-key="/#sponsors" tabindex="-1" aria-selected="false" className="nav-link">Sponsors</a>
                        <Link to="/speakers"><div className="nav-link">Speakers</div></Link>
                        <a href="/#contact" role="tab" data-rb-event-key="/#contact" tabindex="-1" aria-selected="false" className="nav-link">Contact</a>
                        <a href="/#faq" role="tab" data-rb-event-key="/#faq" tabindex="-1" aria-selected="false" className="nav-link">FAQ</a>
                        <a href="https://2019.cusec.net/" target="_blank" role="tab" data-rb-event-key="https://2019.cusec.net/" tabindex="-1" aria-selected="false" className="nav-link">2019</a> */}
                        <Link smooth to="/#about"><div className="nav-link">About</div></Link>
                        <Link smooth to="/#venue"><div className="nav-link">Venue</div></Link>
                        <Link smooth to="/#sponsors"><div className="nav-link">Sponsors</div></Link>
                        <Link to="/speakers"><div className="nav-link">Speakers</div></Link>
                        <Link smooth to="/#contact"><div className="nav-link">Contact</div></Link>
                        <Link smooth to="/#faq"><div className="nav-link">FAQ</div></Link>
                        <a href="https://2019.cusec.net/" target="_blank" role="tab" data-rb-event-key="https://2019.cusec.net/" tabindex="-1" aria-selected="false" className="nav-link">2019</a>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}