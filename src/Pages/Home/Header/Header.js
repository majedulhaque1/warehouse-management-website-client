import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container className='text-center'>
                        <Navbar.Brand href="#home" className='text-warning'>carDelar</Navbar.Brand>
                        <Navbar.Toggle aria="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link href="#home"><Link className='text-warning text-decoration-none' to={'/'}>Home</Link></Nav.Link>
                            <Nav.Link href="#items"><Link className='text-warning text-decoration-none' to={'/items'}>Items</Link></Nav.Link>
                            <Nav.Link href="#items"><Link className='text-warning text-decoration-none' to={'/myitem'}>My Items</Link></Nav.Link>
                            <Nav.Link href="#items"><Link className='text-warning text-decoration-none' to={'/useradditem'}>Add Items</Link></Nav.Link>
                            <Nav.Link href="#items"><Link className='text-warning text-decoration-none' to={'/manageitems'}>Manage Items</Link></Nav.Link>
                            <Nav.Link href="#items"><Link className='text-warning text-decoration-none' to={'/manageinventories'}>Manage Invenories</Link></Nav.Link>
                            {!user ? <Nav.Link href="#login"><Link className='text-warning text-decoration-none' to={'/login'}>Login</Link></Nav.Link>: ''}
                            {user ? 
                            <Nav.Link href="#pricing"><button onClick={() => signOut(auth)} className='btn btn-warning text-white'>Sign Out</button></Nav.Link>
                            : <Nav.Link href="#pricing"><Link className='text-warning text-decoration-none' to={'/signup'}>Sign Up</Link></Nav.Link>}
                        </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;