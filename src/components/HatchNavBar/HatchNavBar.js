import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from './../../logo.svg';

class HatchNavBar extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">
                <img src={logo} width="100" height="30" className="d-inline-block align-top" alt="Hatch logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                    <Nav className="align-right">
                    <Nav.Link href="#">Log In</Nav.Link>
                    <Nav.Link eventKey={2} href="#" className="text-danger">
                        Sign Up
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HatchNavBar;