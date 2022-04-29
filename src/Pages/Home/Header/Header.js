import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home"><Link className='text-white text-decoration-none' to={'/'}>Home</Link></Nav.Link>
                            <Nav.Link href="#features"><Link className='text-white text-decoration-none' to={'/inventory'}>Inventory</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link className='text-white text-decoration-none' to={'/manage-inventory'}>Manage Inventory</Link></Nav.Link>
                            <Nav.Link href="#login"><Link className='text-white text-decoration-none' to={'/login'}>Login</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link className='text-white text-decoration-none' to={'/signup'}>Sign Up</Link></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;