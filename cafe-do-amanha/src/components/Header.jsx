import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import './Header.css';

function Header() {
    const [activeLink, setActiveLink] = useState("/");
    
    return (
        <>
            <Navbar expand="lg" bg="brown" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">Café do Amanhã</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Alternar navegação" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/" onClick={() => setActiveLink("/")}>Início</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link as={Link} to="/sobre-nos" onClick={() => setActiveLink("/sobre-nos")}>Sobre Nós</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link as={Link} to="/menu" onClick={() => setActiveLink("/menu")}>Menu</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link as={Link} to="/pedidos" onClick={() => setActiveLink("/pedidos")}>Pedidos</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link as={Link} to="/historias" onClick={() => setActiveLink("/historias")}>Histórias</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link as={Link} to="/contato" onClick={() => setActiveLink("/contato")}>Contato</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
