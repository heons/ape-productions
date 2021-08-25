import './ArtistDetail.css';
import React, { useState } from 'react';
import { getArtistDetailById } from '../resource';
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

    // Compute and set the hight of iframe with width.
    // TODO: We have magic numbers here.
    let ratio = Math.max((56.25 / (width / 800)), 50);
    ratio = Math.min(ratio, 80);
    // console.log(ratio)
    const styleIframe = {
        'width': '70vw',
        'height': `${ratio}vw`
    }

    return (
        <div className="ArtistDetail">
            <h1>{artist && artist.title}</h1>
            <Carousel interval={null} onSelect={handleSelect}>
                {artist && artist.subItems.map((item, i) => {
                    return (
                        <Carousel.Item key={`${artist.title}-${i}`}>
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
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default ArtistDetail

