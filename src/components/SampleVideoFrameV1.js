// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import { computeSizeFromWidth } from '../utils'


const SampleVideoFrame = ({ artist, screenSize, targetPos, onMouseOver }) => {
  const [naturalSize, setNaturalSize] = useState({width: 100, height: 100});
  const [isMouseOver, setIsMouseOver] = useState(false);

  const size = computeSizeFromWidth(naturalSize, screenSize.width);

  const row = Math.floor((parseInt(artist.sampleId) - 1) / 3);
  const col = (parseInt(artist.sampleId) - 1) % 3;
  const OVERLAP_RATIO = 1.3;
  const newTargetPos = {
    x: targetPos.x + col * size.width * OVERLAP_RATIO,
    y: targetPos.y + row * size.height * OVERLAP_RATIO,
  };

  const motionStyle = {
    position: 'absolute',
    transition: isMouseOver ? 'all 1s linear' : 'all 2s linear',
    // transform: `translate(${newTargetPos.x}px, ${newTargetPos.y}px)`,
    transform: isMouseOver ? `translate(${newTargetPos.x}px, ${newTargetPos.y}px) scale(1.5)` : `translate(${newTargetPos.x}px, ${newTargetPos.y}px)`,
    zIndex: isMouseOver ? 4 : 3,
    opacity: isMouseOver ? 1 : 0.5,
    
  }

  return (
    <div style={motionStyle}>
      <Link to={`/${artist.id}`}>
        <video
          className={isMouseOver ? "FilterAdditionalBrightness" : null}
          src={`${process.env.PUBLIC_URL}/${artist.sampleVideoSrc}`}
          width={size.width}
          height={size.height}
          preload="auto"
          loop
          muted
          autoPlay
          playsInline
          onLoadedData={response => {
            const { videoWidth, videoHeight } = response.target;      
            setNaturalSize({width: videoWidth, height: videoHeight});
          }}
          onMouseOver={
            () => {
              setIsMouseOver(true);
              onMouseOver(artist.title);
            }
          }
          onMouseLeave={
            () => {
              setIsMouseOver(false);
              onMouseOver("");
            }
          }
        >
          Your browser does not support the HTML5 Video element.
        </video>
      </Link>
    </div>
  )
}

export default SampleVideoFrame
