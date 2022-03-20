import './ArtistDetail.css';
import React, { useState } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { getBasePageStyle } from '../utils'
// Resources
import { getArtistDetailById } from '../resources/films';
// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'

const ArtistDetail = ({ match }) =>{
    const artist = getArtistDetailById(match.params.id);
    const { height, width } = useWindowDimensions();
    
    const [ index, setIndex ] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // TODO: We have magic numbers here.
    const styleIframe = {
        'width': '100%',
        // 'height': `59vh`,
        marginBottom: '30px'
    }

    const pageStyle = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        textAlign: 'left',
        backgroundColor: 'black',
        overflowY: 'scroll',
        overflowX: 'hidden',
        width,
        height,
    };

    return (
        // <div className="ArtistDetail">
        <div style={pageStyle} className="PagePaddingTop">
            <Helmet>
                <title>{ `Dir. Oh Eun Ho - ${artist.title}` }</title>
            </Helmet>
            <h1>{artist && artist.title}</h1>
                
                {artist && artist.subItems.map((item, i) => {
                    return (
                        <Row key={`${artist.title}-${i}`}>
                        <Col xs={12} >
                            <h3 style={{marginBottom: '10px'}}>{item.title}</h3>
                            </Col>
                        <Col xs={12}>
                            <iframe
                                style={styleIframe}
                                id={`${artist.id}-${i}`}
                                title={artist.title}
                                src={item.url+'?autoplay=0'}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture">
                            </iframe>
                            : <div></div>
                        </Col>
            </Row>
                    )
                })}
        </div>
    )
}

export default ArtistDetail

