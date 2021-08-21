// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React from 'react'
import SamplePhotoFrameV1 from './SamplePhotoFrameV1';
import { getPhotoUrlsByIndex } from '../resource';


const PhotoPage = ({ screenSize, targetPos, zIndex }) => {
    // Photo
    const photoList = [...getPhotoUrlsByIndex(0), ...getPhotoUrlsByIndex(1)];

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
        