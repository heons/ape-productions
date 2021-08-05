import React from 'react'
import { getArtistDetail } from '../resource'

const ArtistDetail = ({ match }) =>{

    const artist = getArtistDetail(match.params.title);
    console.log(artist);

    return (
        <div>
            {artist.title}
        </div>
    )
}

export default ArtistDetail

