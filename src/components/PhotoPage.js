// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React from 'react'
import SamplePhotoFrameV1 from './SamplePhotoFrameV1';
import { getBasePageStyle } from '../utils'

// Resources
import { getPhotoUrlsByIndex } from '../resources/photos';


const PhotoPage = ({ screenSize, targetPos, zIndex }) => {
    // Photo
    const photoList = [...getPhotoUrlsByIndex(0, true), ...getPhotoUrlsByIndex(1, true)];

    const pageStyle = {
        ...getBasePageStyle(screenSize.width, screenSize.height, zIndex),
        backgroundColor: 'black',
    };

    return (
        <div
            style={pageStyle}
        >
            {photoList.map((photo, i) => (
                <SamplePhotoFrameV1
                    key={i}
                    photo = {{url:photo, id:i+1}}
                    screenSize={screenSize}
                    targetPos={targetPos}
                />
            ))}
        </div>
    )
}
        
export default PhotoPage
        