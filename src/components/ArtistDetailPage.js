import './ArtistDetail.css';
import React from 'react';
import ArtistDetail from './ArtistDetail';
import ArtistDetailM from './ArtistDetailM';
import { Helmet } from 'react-helmet-async';

// Resources
import { getArtistDetailById } from '../resources/films';


const ArtistDetailPage = ({ match }) =>{
    const artist = getArtistDetailById(match.params.id);

    return (
        <div className="ArtistDetail">
            <Helmet>
                <title>{ `Dir. Oh Eun Ho - ${artist.title}` }</title>
            </Helmet>
            <h1>{artist && artist.title}</h1>
            <ArtistDetail artist={artist} />
        </div>
    )
}

export default ArtistDetailPage

