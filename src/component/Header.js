import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="justify-content-center">
                <Navbar.Brand>
                    <Link
                    to="/"
                    style={{
                        textDecoration: "none"
                    }}
                >Главная страница</Link></Navbar.Brand>
                <Nav>
                    <Nav.Link ><Link to="/hero">Hero</Link></Nav.Link>
                    <Nav.Link><Link to="/location">Location</Link></Nav.Link>
                    <Nav.Link><Link to="/episodes">Episode</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;