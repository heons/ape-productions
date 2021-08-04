// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/


import React from 'react'
import { useState, useRef } from 'react';
import styled from 'styled-components';


const computeSizeFromWidth = (size, width) => {
  const ratio = width / 1024;
  return {
    width: Math.round(size.width * ratio),
    height: Math.round(size.height * ratio),
    ratio: ratio
  }
}

const MoveDivWrap = styled.div`
  position: absolute;
  transition: all 3s linear;
  transform: translate(${props => props.endPos.x}px, ${props => props.endPos.y}px);
`;

const SampleVideoFrame = ({ artist, screenSize, targetPos, onMouseOver }) => {
  // const [naturalSize, setNaturalSize] = useState({width: 300, height: 200});
  const [naturalSize, setNaturalSize] = useState({width: 100, height: 100});
  const [isMouseOver, setIsMouseOver] = useState(false);

  const newTargetPos = useRef({...artist.seedPos});

  const size = computeSizeFromWidth(naturalSize, screenSize.width);

  const styles = {
    opacity: isMouseOver ? 1 : 0.5,
  };

  // console.log(targetPos)
  const ACT_RESOLUTION = 10;
  if(Math.round(targetPos.x) % ACT_RESOLUTION === 0) {
    newTargetPos.current = {
      x: targetPos.x + artist.seedPos.x,
      y: targetPos.y + artist.seedPos.y,
    };
  }
  
  return (
    <div>
      <MoveDivWrap endPos={newTargetPos.current}>
        <video
          src={artist.sampleVideoSrc}
          width={size.width}
          height={size.height}
          style={styles}
          preload="auto" loop muted autoPlay playsInline
          onLoadedData={response => {
            const { videoWidth, videoHeight } = response.target;      
            setNaturalSize({width: videoWidth, height: videoHeight});
          }}
          onMouseOver={
            () => {
              setIsMouseOver(true)
              onMouseOver(artist.title)
            }
          }
          onMouseLeave={() => setIsMouseOver(false)}
        >
          Your browser does not support the HTML5 Video element.
        </video>
      </MoveDivWrap>
    </div>
  )
}

export default SampleVideoFrame
