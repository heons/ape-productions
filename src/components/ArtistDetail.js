import './ArtistDetail.css';
import React, { useState } from 'react';
import { getArtistDetailById } from '../resource';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ArtistDetail = ({ match }) =>{

    const artist = getArtistDetailById(match.params.id);

    // const numItems = artist.subItems.length;
    // console.log(numItems);
    
    const [ index, setIndex ] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="ArtistDetail">
            <h1>{artist.title}</h1>
            <Carousel interval={null} onSelect={handleSelect}>
                {artist.subItems.map((item, i) => {
                    return (
                        <Carousel.Item key={`${artist.title}-${i}`}>
                            {
                                index === i ? 
                                <iframe
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

