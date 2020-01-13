import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => 
{
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Biwott Demo Apps</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/FoodApp">Food App</Nav.Link>
                    <Nav.Link href="/blockchain">Block-Chain</Nav.Link>
                    <Nav.Link href="/fullcrud">Chuck Norris</Nav.Link>
                    <Nav.Link href="/fullcrudRails">Full-CRUD(RAILS-API+MySql)</Nav.Link>
                </Nav>
            
            </Navbar.Collapse>
        </Navbar>
    );
} 

export default Navigation;