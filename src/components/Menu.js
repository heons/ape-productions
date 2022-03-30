import './Menu.css';
import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

// Resources
import { artistInfos } from '../resources/films'
import { photoWorkList } from '../resources/photos'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'

const Menu = ({ category }) => {
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
                Oh Eun Ho
            </Link>
        </Container>

    const titleInNavBar = width < 767 &&
        <LinkContainer to='/' onClick={() => { setExpanded(false) }}>
            <Navbar.Brand>
                Oh Eun Ho
            </Navbar.Brand>
        </LinkContainer>

    return (
        <div className='MenuM'>
            { titleOnTop }
            <Navbar variant="dark" expand="md"
             expanded={expanded}
            >
                <Container>
                    { titleInNavBar }
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
                        {/* <NavDropdown title="Photo" id="collasible-nav-dropdown" className="dropdown-photo">
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
                        </NavDropdown> */}
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
                                Info
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;