import React from 'react'

const SampleVideoFrame = (props) => {
  return (
    <div>
      <video src={props.src} style={{opacity: 0.5}} preload="auto" loop muted autoPlay playsInline>
        Your browser does not support the HTML5 Video element.
      </video>
    </div>
  )
}

export default SampleVideoFrame
