// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React from 'react'
import SampleVideoFrameV1 from './SampleVideoFrameV1';
import { getBasePageStyle } from '../utils'

// Resource
import { getInitSampleArtistsInfo } from '../resources/films';


const FilmPage = ({ screenSize, targetPos, zIndex, onMouseOver }) => {

    const artistList = getInitSampleArtistsInfo();

    const pageStyle = {
        ...getBasePageStyle(screenSize.width, screenSize.height, zIndex),
        backgroundColor: 'black',
    };

    return (
        <div
            style={pageStyle}
        >
            {artistList.map((artist, i) => (
                <SampleVideoFrameV1
                    key={artist.title}
                    artist={artist}
                    screenSize={screenSize}
                    targetPos={artist.id % 2 === 1 ? targetPos[0] : targetPos[1]}
                    onMouseOver={onMouseOver}
                />
            ))}
        </div>
    )
}

export default FilmPage
