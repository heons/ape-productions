import './ArtistDetail.css';
import React, { useState } from 'react';
import { getArtistDetailById } from '../resources/film';
import { Carousel } from 'react-bootstrap';
import useWindowDimensions from '../hooks/useWindowDimensions'


const ArtistDetail = ({ match }) =>{
    const { width } = useWindowDimensions();
    const artist = getArtistDetailById(match.params.id);

    // TODO: Break down the video to a list when the width is less than xx.
    // const numItems = artist.subItems.length;
    // console.log(numItems);
    
    const [ index, setIndex ] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // TODO: We have magic numbers here.
    const styleIframe = {
        'width': '100%',
        'height': `70vh`,
        marginBottom: '30px'
    }

    return (
        <div className="ArtistDetail">
            <h1>{artist && artist.title}</h1>
            <Carousel className="ArtistDetail-Carousel" interval={null} onSelect={handleSelect}>
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
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen>
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

