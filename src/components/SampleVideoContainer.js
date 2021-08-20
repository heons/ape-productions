// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React, { useRef } from 'react'
import SampleVideoFrame from './SampleVideoFrame';


const SampleVideoContainer = ({ artists, screenSize, targetPos, onMouseOver }) => {
    
    const newTargetPos = useRef({x:0, y:0});
    
    // console.log(targetPos)
    const ACT_RESOLUTION = 10;
    if(Math.round(targetPos.x) % ACT_RESOLUTION === 0) {
        newTargetPos.current = {
            x: targetPos.x,
            y: targetPos.y,
        };
    }
    
    const motionStyles = {
        width: screenSize.width,
        height: screenSize.height,
        position: 'absolute',
        transition: 'all 2s linear',
        transform: `translate(${newTargetPos.current.x}px, ${newTargetPos.current.y}px)`,
    }
    
    return (
        <div style={motionStyles}>
            {artists.map((artist) => (
                <SampleVideoFrame
                    key={artist.title}
                    artist = {artist}
                    screenSize={screenSize}
                    onMouseOver={onMouseOver}
                />
            ))}
        </div>
    )
}
        
export default SampleVideoContainer
        