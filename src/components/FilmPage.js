// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React from 'react'
import SampleVideoFrameV1 from './SampleVideoFrameV1';
import { getInitSampleArtistsInfo } from '../resources/films';
// import {
//     isBrowser,
//     isMobile
//   } from "react-device-detect";


const FilmPage = ({ screenSize, targetPos, zIndex, onMouseOver }) => {
    // console.log(isBrowser);
    // console.log(isBrowser, isMobile);

    const artistList = getInitSampleArtistsInfo();

    const pageStyle = {
        width: screenSize.width,
        height: screenSize.height,
        position: 'absolute',
        top: `0px`,
        left: `0px`,
        backgroundColor: 'black',
        zIndex: zIndex,
    };
    
    return (
        <div
            style={pageStyle}
        >
            {artistList.map((artist, i) => (
                <SampleVideoFrameV1
                    key={artist.title}
                    artist = {artist}
                    screenSize={screenSize}
                    targetPos={artist.group === 'group1' ? targetPos[0] : targetPos[1]}
                    onMouseOver={onMouseOver}
                />
            ))}
        </div>
    )
}
        
export default FilmPage
        