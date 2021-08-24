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
    }

    const styleText = {
        color: 'white',
        fontSize: '0.8em',
        padding: '0',
        margin: '0',
    }
    
    return (
        <Row>
            <Col xs={12}>
                <h1 style={{paddingBottom: '0.8em',}}>{note.title}</h1>
            </Col>
            <Col xs={12}>
                {note.content.map((line) => {
                    return <p style={styleText}>{line}</p>
                })}
            </Col>
            <Col xs={12}>
                <iframe
                    style={styleIframe}
                    title={'tmp'}
                    src={note.url}
                    frameBorder="0"
                    allow="fullscreen; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </Col>
            {
                note.summary.length > 0 &&      
                <Col xs={12} md={4}>
                    <h1>Summary</h1>
                    <div>
                        {note.summary.map((line) => {
                            return <p style={styleText}>{line}</p>
                        })}
                    </div>
                </Col>
            }
            {
                note.needs.length > 0 &&      
                <Col xs={12} md={4}>
                    <h1>Needs</h1>
                    <ul>
                        {note.needs.map((line) => {
                            return <li style={styleText}>{line}</li>
                        })}
                    </ul>
                </Col>
            }
            {
                note.solution.length > 0 &&      
                <Col xs={12} md={4}>
                    <h1>Solution</h1>
                    <div>
                        {note.solution.map((line) => {
                            return <p style={styleText}>{line}</p>
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
        