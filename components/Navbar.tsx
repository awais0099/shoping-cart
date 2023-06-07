import Link from 'next/link';
import React from 'react'
import { Navbar as NavbarBs } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Navbar() {
    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm md-3'>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/" as={Link}>Home</Nav.Link>
                    <Nav.Link href="/store" as={Link}>Store</Nav.Link>
                    <Nav.Link href="/about" as={Link}>About</Nav.Link>
                </Nav>
                <Button className='position-relative' style={{height: "2.5rem", width: "2.5rem"}}>
                    C
                    <div className='bg-danger text-white rounded-circle d-flex justify-content-center align-items-center position-absolute' style={{bottom: 0, right: 0, width: '1.2rem', height: '1.2rem' }}>5</div>
                </Button>
            </Container>
        </NavbarBs>
    )
}
