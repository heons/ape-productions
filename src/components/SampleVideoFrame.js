import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'


const computeSizeFromWidth = (size, width) => {
  const ratio = width / 1024;
  return {
    width: Math.round(size.width * ratio),
    height: Math.round(size.height * ratio),
    ratio: ratio
  }
}

const SampleVideoFrame = ({ artist, screenSize, onMouseOver }) => {
  // const [naturalSize, setNaturalSize] = useState({width: 300, height: 200});
  const [naturalSize, setNaturalSize] = useState({width: 100, height: 100});
  const [isMouseOver, setIsMouseOver] = useState(false);


  const size = computeSizeFromWidth(naturalSize, screenSize.width);

    
  const styles = {
    position: 'fixed',
    left: artist.seedPos.x,
    top: artist.seedPos.y,
    opacity: isMouseOver ? 1 : 0.5,
    // 'transition-delay': artist.group === 'group1' ? '1000ms': '0ms',
  };

  return (
      <Link to={`/${artist.id}?idx=0`}>
        <video
          id={'video'+artist.id}
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
  )
}

export default SampleVideoFrame
