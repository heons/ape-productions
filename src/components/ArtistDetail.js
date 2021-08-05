import React from 'react'
import { getArtistDetail } from '../resource'
import useWindowDimensions from '../hooks/useWindowDimensions'


const ArtistDetail = ({ match }) =>{

    const artist = getArtistDetail(match.params.title);
    console.log(artist);
    console.log(artist.subItems[0].url);

    const { height, width } = useWindowDimensions();
    const ratio = 7 / 10;

    return (
        <div>
            <h1>{artist.title}</h1>
            <iframe
                title={artist.title}
                src={artist.subItems[0].url}
                width={width * ratio}
                height={height * ratio}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default ArtistDetail

