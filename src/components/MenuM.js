import './Menu.css';
import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

// Resources
import { artistInfos } from '../resources/films'
import { photoWorkList } from '../resources/photos'


const MenuM = ({ category }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='MenuM'>
            <Navbar variant="dark" expand="md"
             expanded={expanded}
            >
                <Container>
                    <LinkContainer to='/' onClick={() => { setExpanded(false) }}>
                        <Navbar.Brand>
                            APE.
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Film" className="dropdown-film">
                            {artistInfos.map((artist, index) => {
                                return (
                                    <LinkContainer
                                        key={`film-${index}`}
                                        to={`/${artist.id}`}
                                        onClick={() => { setExpanded(false) }}
                                    >
                                        <NavDropdown.Item eventKey={`film-${index}`}>
                                            {artist.title}
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                )
                            })}
                        </NavDropdown>
                        <NavDropdown title="Photo" id="collasible-nav-dropdown" className="dropdown-photo">
                            {photoWorkList.map((photoWork, index) => {
                                return (
                                    <LinkContainer
                                        key={`photo-${index}`}
                                        to={`/photo/${index}`}
                                        onClick={() => { setExpanded(false) }}
                                    >
                                        <NavDropdown.Item eventKey={`photo-${index}`}>
                                            {photoWork.title}
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                )
                            })}
                        </NavDropdown>
                        <Nav.Link eventKey="note-1" >
                            <Link 
                                to={category === 'note' ? `/` : `/?category=${'note'}`}
                                onClick={() => { setExpanded(false) }}
                            >
                                Note
                            </Link>
                        </Nav.Link>
                        <Nav.Link eventKey="client-1" >
                            <Link 
                                to={category === 'client' ? `/` : `/?category=${'client'}`}
                                onClick={() => { setExpanded(false) }}
                            >
                                Client
                            </Link>
                        </Nav.Link>
                        <Nav.Link eventKey="contact-1" >
                            <Link 
                                to={category === 'contact' ? `/` : `/?category=${'contact'}`}
                                onClick={() => { setExpanded(false) }}
                            >
                                Contact
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MenuM;