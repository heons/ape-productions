// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React, { useState } from 'react'


const computeSizeFromWidth = (size, width) => {
    const ratio = width / 1024;
    return {
        width: Math.round(size.width * ratio),
        height: Math.round(size.height * ratio),
        ratio: ratio
    }
}

const SamplePhotoFrameV1 = ({ photo, screenSize, targetPos, onMouseOver }) => {
    const [naturalSize, setNaturalSize] = useState({width: 100, height: 140});
    const [isMouseOver, setIsMouseOver] = useState(false);

    const size = computeSizeFromWidth(naturalSize, screenSize.width);

    const row = Math.floor((parseInt(photo.id) - 1) / 8);
    const col = (parseInt(photo.id) - 1) % 8;
    const OVERLAP_RATIO = 1.05;
    const newTargetPos = {
        x: targetPos.x + col * size.width * OVERLAP_RATIO,
        y: targetPos.y + row * size.height * OVERLAP_RATIO,
    };
    
    const styles = {
        opacity: isMouseOver ? 1 : 0.5,
    };

    const motionStypes = {
        position: 'absolute',
        transition: 'all 2s linear',
        transform: `translate(${newTargetPos.x}px, ${newTargetPos.y}px)`,
    }

    return (
        <div style={motionStypes}>
            <img
                src={photo.url}
                alt=""
                width={size.width}
                height={size.height}
                style={styles}
                onMouseOver={
                    () => {
                        setIsMouseOver(true);
                        onMouseOver(photo.id);
                    }
                }
                onMouseLeave={
                    () => {
                        setIsMouseOver(false);
                        onMouseOver("");
                    }
                }
            />
        </div>
    )
}

export default SamplePhotoFrameV1
