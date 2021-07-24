import React from 'react'
import { useState, useEffect } from 'react';

const computeSizeFromWidth = (size, width) => {
  const ratio = width / 800;
  return {
    width: Math.round(size.width * ratio),
    height: Math.round(size.height * ratio),
    ratio: ratio
  }
}

const SampleVideoFrame = ({ src, screenSize, initPos, addPos }) => {
  // const [naturalSize, setNaturalSize] = useState({width: 300, height: 200});
  const [naturalSize, setNaturalSize] = useState({width: 100, height: 100});
  const [isMouseOver, setIsMouseOver] = useState(false);

  const size = computeSizeFromWidth(naturalSize, screenSize.width);

  const styles = {
    opacity: isMouseOver ? 1 : 0.5,
    position: 'absolute',
    top: Math.round(initPos.y * size.ratio + addPos.y),    // computed based on child and parent's height
    left: Math.round(initPos.x * size.ratio + addPos.x)   // computed based on child and parent's width
  };

  // useEffect(() => {
  //   setSize(computeSizeFromWidth(size, screenSize.width));
  // }, [screenSize]);


  return (
    <div>
      <video
        src={src}
        width={size.width}
        height={size.height}
        style={styles}
        preload="auto" loop muted autoPlay playsInline
        onLoadedData={response => {
          const { videoWidth, videoHeight } = response.target;      
          setNaturalSize({width: videoWidth, height: videoHeight});
        }}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        Your browser does not support the HTML5 Video element.
      </video>
    </div>
  )
}

export default SampleVideoFrame
