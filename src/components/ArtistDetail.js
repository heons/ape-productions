import './ArtistDetail.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

// Resources
import { getArtistDetailById } from '../resources/films';


const ArtistDetail = ({ match }) =>{
    const artist = getArtistDetailById(match.params.id);
    
    const [ index, setIndex ] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // TODO: We have magic numbers here.
    const styleIframe = {
        'width': '100%',
        'height': `59vh`,
        marginBottom: '30px'
    }

    return (
        <div className="ArtistDetail">
            <Helmet>
                <title>{ `Oh Eun Ho - ${artist.title}` }</title>
            </Helmet>
            <h1>{artist && artist.title}</h1>
            <Carousel  interval={null} onSelect={handleSelect} className="ArtistDetail-Carousel">
                {artist && artist.subItems.map((item, i) => {
                    return (
                        <Carousel.Item key={`${artist.title}-${i}`}>
                            <h3 style={{marginBottom: '10px'}}>{item.title}</h3>
                            {
                                index === i ? 
                                <iframe
                                    style={styleIframe}
                                    id={`${artist.id}-${i}`}
                                    title={artist.title}
                                    src={item.url+'?autoplay=1'}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture">
                                </iframe>
                                : <div></div>
                            }                            
                            
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default ArtistDetail

