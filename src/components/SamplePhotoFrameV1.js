// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React, { useState } from 'react'
import { computeSizeFromWidth } from '../utils'


const SamplePhotoFrameV1 = ({ photo, screenSize, targetPos, onMouseOver }) => {
    const fixedImageSize = { width: 100, height: 140 };
    const [isMouseOver, setIsMouseOver] = useState(false);

    const size = computeSizeFromWidth(fixedImageSize, screenSize.width);

    const row = Math.floor((parseInt(photo.id) - 1) / 11);
    const col = (parseInt(photo.id) - 1) % 11;
    const OVERLAP_RATIO = 1.05;
    const targetGroup = photo.id % 2 === 0 ? 1 : 0
    const newTargetPos = {
        x: targetPos[targetGroup].x + col * size.width * OVERLAP_RATIO,
        y: targetPos[targetGroup].y + row * size.height * OVERLAP_RATIO,
    };

    const motionStyle = {
        position: 'absolute',
        transition: isMouseOver ? 'all 0.8s linear' : 'all 2s linear',
        // transform: `translate(${newTargetPos.x}px, ${newTargetPos.y}px)`,
        transform: isMouseOver ? `translate(${newTargetPos.x}px, ${newTargetPos.y}px) scale(1.5)` : `translate(${newTargetPos.x}px, ${newTargetPos.y}px)`,
        zIndex: isMouseOver ? 4 : 3,
        opacity: isMouseOver ? 1 : 0.5,
    }

    return (
        <div style={motionStyle}>
            <img
                className={isMouseOver ? "FilterAdditionalBrightness" : null}
                src={photo.url}
                alt=""
                width={size.width}
                height={size.height}
                onMouseOver={
                    () => {
                        setIsMouseOver(true);
                        onMouseOver && onMouseOver(photo.id);
                    }
                }
                onMouseLeave={
                    () => {
                        setIsMouseOver(false);
                        onMouseOver && onMouseOver("");
                    }
                }
            />
        </div>
    )
}

export default SamplePhotoFrameV1
