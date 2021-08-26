import React from 'react'
import { Row, Col } from 'react-bootstrap';


const NoteItem = ({ note }) => {

    const styleIframe = {
        display: 'block',
        width: '100%',
        height: '50vw',
        border: 'none',
        top: 0,
        left: 0,
        frameborder: '0',
        marginTop: '0.8em'
    }

    const styleText = {
        color: 'white',
        fontSize: '0.8em',
        padding: '0',
        margin: '0',
    }
    
    // Summary, Needs and Solution is not being used. - No Contents.
    return (
        <Row>
            <Col xs={12}>
                <h1 style={{paddingBottom: '0.8em',}}>{note.title}</h1>
            </Col>
            <Col xs={12}>
                {note.content.map((line, i) => {
                    return <p style={styleText} key={note.title + 'content' + i}>{line}</p>
                })}
            </Col>
            {
                note.urls.length > 0 &&
                note.urls.map((url) => {
                    return <Col xs={12} key={url}>
                        <iframe
                            style={styleIframe}
                            title={note.title}
                            src={url}
                            frameBorder="0"
                            allow="fullscreen; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Col>
                })
            }
            {
                note.summary.length > 0 &&      
                <Col xs={12} md={4}>
                    <h1>Summary</h1>
                    <div>
                        {note.summary.map((line, i) => {
                            return <p style={styleText} key={note.title + 'summary' + i}>{line}</p>
                        })}
                    </div>
                </Col>
            }
            {
                note.needs.length > 0 &&      
                <Col xs={12} md={4}>
                    <h1>Needs</h1>
                    <ul>
                        {note.needs.map((line, i) => {
                            return <li style={styleText} key={note.title + 'needs' + i}>{line}</li>
                        })}
                    </ul>
                </Col>
            }
            {
                note.solution.length > 0 &&      
                <Col xs={12} md={4}>
                    <h1>Solution</h1>
                    <div>
                        {note.solution.map((line, i) => {
                            return <p style={styleText} key={note.title + 'solution' + i}>{line}</p>
                        })}
                    </div>
                </Col>
            }
            <Col xs={12}>
            <hr style={{color: 'white', borderTop: '3px solid', borderRadius: '3px'}}/>
            </Col>
        </Row>
    )
}
        
export default NoteItem
        