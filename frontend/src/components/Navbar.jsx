import React, { useState } from 'react';
import { Navbar, Nav, Button, Container,Modal } from 'react-bootstrap';
import Create from './Create';

const MyNavbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="font-weight-bold" style={{ fontSize: '1.5rem' }}>
                    BLOG-APP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Button variant="outline-light" className="ml-auto" onClick={handleShow}>
                            Create Blog
                        </Button>
                    </Nav>
                </Navbar.Collapse>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal to create post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Create handleClose={handleClose} />
                    </Modal.Body>

                </Modal>

            </Container>
        </Navbar>
    );
};

export default MyNavbar;
