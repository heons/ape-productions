import './ArtistDetail.css';
import React from 'react'
import { getArtistDetailById } from '../resource'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { Link } from 'react-router-dom'
import qs from 'qs'

const ArtistDetail = ({ match, location }) =>{
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    const workIdx = parseInt(query.idx);

    const artist = getArtistDetailById(match.params.id);
    // console.log(artist);
    // console.log(artist.subItems[0].url);

    const subItem = artist.subItems[workIdx]; 

    const { height, width } = useWindowDimensions();
    const ratio = 7 / 10;
    // const numItems = artist.subItems.length;
    // console.log(numItems);

    return (
        <div className="ArtistDetail">
            <h1>{artist.title}</h1>
            <iframe
                key={`${artist.title}-${workIdx}`}
                title={artist.title}
                src={subItem.url+'?autoplay=1'}
                width={width * ratio}
                height={height * ratio}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen>
            </iframe>
            {artist.subItems.map((item, i) => {
                return (
                    <div key={i}>
                        <h3>
                            <Link
                                to={`/${artist.id}?idx=${i}`}
                                className={subItem.title === item.title ? 'ArtistDetail-item-selected' : 'ArtistDetail-item'}
                            >
                                {item.title}
                            </Link>
                        </h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ArtistDetail

