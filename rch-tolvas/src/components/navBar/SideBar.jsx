import React from 'react'

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from'../../assets/img/logos/logo-azul-horizontal.png'
function SideBar() {

    return (
        <Navbar bg='ligth' expand='lg'>
        <Container>
        {/* title  */}
        <div className='logo-empresa'>
            <img src={logo} alt="Logo RCH - Carrocerias" className='logo-empresa' />
        </div>
        <Navbar.Toggle aria-controls='basic-navbar-nav '  />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className=' mx-auto h4'>
            <Nav.Link href='#nosotros'><b> NOSOTROS </b></Nav.Link>
            <Nav.Link href='#productos'><b> PRODUCTOS </b></Nav.Link>
            <Nav.Link href='#servicios'><b> SERVICIOS </b></Nav.Link>
            <Nav.Link href='#ubicacion'><b> DONDE ESTAMOS </b></Nav.Link>
            <Nav.Link href='#fotos'><b> FOTOS </b></Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
            <Nav.Link href='#contacto'>
                <button  className='button-contacto'> CONTACTO  </button>
            </Nav.Link>

            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>

);
}
export default SideBar;