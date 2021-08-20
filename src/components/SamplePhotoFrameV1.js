// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/


import React from 'react'
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom'


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
  // console.log(targetPos);
  
  const styles = {
    opacity: isMouseOver ? 1 : 0.5,
  };

  const motionStypes = {
    position: 'absolute',
    transition: 'all 3s linear',
    transform: `translate(${newTargetPos.x}px, ${newTargetPos.y}px)`,
  }

  return (
    <div style={motionStypes}>
        <img
          src={photo.url}
          alt=""
          width={ size && size.width}
          height={ size && size.height}
          style={styles}
          onLoad={response => {
            const { width, height } = response.target;
            setNaturalSize({width: width, height: height});
          }}
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
        >
        </img>
    </div>
  )
}

export default SamplePhotoFrameV1
