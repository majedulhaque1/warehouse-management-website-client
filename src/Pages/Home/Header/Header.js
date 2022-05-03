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
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">carDelar</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home"><Link className='text-white text-decoration-none' to={'/'}>Home</Link></Nav.Link>
                            <Nav.Link href="#items"><Link className='text-white text-decoration-none' to={'/recentitems'}>Items</Link></Nav.Link>
                            {!user ? <Nav.Link href="#login"><Link className='text-white text-decoration-none' to={'/login'}>Login</Link></Nav.Link>: ''}
                            {user ? 
                            <Nav.Link href="#pricing"><button onClick={() => signOut(auth)} className='btn btn-light'>Sign Out</button></Nav.Link>
                            : <Nav.Link href="#pricing"><Link className='text-white text-decoration-none' to={'/signup'}>Sign Up</Link></Nav.Link>}
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;