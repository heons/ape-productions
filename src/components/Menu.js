import './Menu.css';
import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

// Resources
import { artistInfos } from '../resources/films'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'

const Menu = ({ category, pathname }) => {
    const { width } = useWindowDimensions();
    const [expanded, setExpanded] = useState(false);
    const nameStyle = {
        marginLeft: '5px',
        padding: '0px'
    };

    const titleOnTop = width >= 767 &&
        <Container>
            <Link
                to='/'
                onClick={() => { setExpanded(false) }}
                style={nameStyle}
            >
                OH EUN HO
            </Link>
        </Container>

    const titleInNavBar = width < 767 &&
        <LinkContainer to='/' onClick={() => { setExpanded(false) }}>
            <Navbar.Brand>
                OH EUN HO
            </Navbar.Brand>
        </LinkContainer>

    return (
        <div className='MenuM'>
            {titleOnTop}
            <Navbar variant="dark" expand="md"
                expanded={expanded}
            >
                <Container>
                    {titleInNavBar}
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="FILM" className="dropdown-film">
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
                            <Nav.Link
                                as={Link}
                                eventKey="photo-1"
                                to={pathname === '/photo/0' ? `/` : `/photo/0`}
                                onClick={() => { setExpanded(false) }}
                            >
                                PHOTO
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                eventKey="dvd-1"
                                to={category === 'dvd' ? `/` : `/?category=${'dvd'}`}
                                onClick={() => { setExpanded(false) }}
                            >
                                DVD
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                eventKey="note-1"
                                to={category === 'note' ? `/` : `/?category=${'note'}`}
                                onClick={() => { setExpanded(false) }}   
                            >
                                NOTE
                            </Nav.Link>
                            <Nav.Link 
                                as={Link}
                                eventKey="client-1"
                                to={category === 'client' ? `/` : `/?category=${'client'}`}
                                onClick={() => { setExpanded(false) }}
                            >
                                CLIENT
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                eventKey="contact-1"
                                to={category === 'contact' ? `/` : `/?category=${'contact'}`}
                                    onClick={() => { setExpanded(false) }}
                            >
                                INFO
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;