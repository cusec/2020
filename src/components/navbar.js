import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import "../styles/navbar.css";

export default class NavMenu extends React.Component {
    render() {
        return (
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/#home">CUSEC 2020</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "flex-end" }}>
                    <Nav >
                        <Nav.Link href="/#about">About</Nav.Link>
                        <Nav.Link href="./#events">Events</Nav.Link>
                        <Nav.Link href="/#venue">Venue</Nav.Link>
                        <Nav.Link href="/#contact">Contact</Nav.Link>
                        <Nav.Link href="/#faq">FAQ</Nav.Link>
                        <Nav.Link href="https://2019.cusec.net/">2019</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}