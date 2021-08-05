import React from 'react'
import { getArtistDetail } from '../resource'

const ArtistDetail = ({ match }) =>{

    const artist = getArtistDetail(match.params.title);
    console.log(artist);
    console.log(artist.subItems[0].url);

    return (
        <div>
            <h1>{artist.title}</h1>
            <iframe
                title={artist.title}
                src={artist.subItems[0].url}
                width="960"
                height="540"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen>
            </iframe>

        </div>
    )
}

export default ArtistDetail

