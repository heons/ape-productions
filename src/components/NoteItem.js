// Ref: https://faq.dailymotion.com/hc/en-us/articles/360022841393-How-to-preserve-the-player-aspect-ratio-on-a-responsive-page

import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { paddingBottomByRatio } from '../utils'

const NoteItem = ({ note }) => {

    const styleIframe = {
        position: 'absolute',
        width: '100%',
        height: '100%',
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
                note.subItems.length > 0 &&
                note.subItems.map((item) => {
                    return <Col xs={12} key={item.url}>
                        <div style={{position: 'relative', paddingBottom: paddingBottomByRatio[item.ratio]}}>
                            <iframe
                                style={styleIframe}
                                title={note.title}
                                src={item.url}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="fullscreen; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
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
        
export default React.memo(NoteItem)
        