import './App.css';
import SampleVideoFrame from './components/SampleVideoFrame';
import useWindowDimensions from './hooks/useWindowDimensions'
import useMousePosition from './hooks/useMousePosition';
import { useState, useRef } from 'react';


function App() {
  const { height, width } = useWindowDimensions();
  const { mousePosition } = useMousePosition();

  const targetPos1 = useRef({x: 0, y: 0});
  const targetPos2 = useRef({x: 0, y: 0});

  const hasMovedCursor = typeof mousePosition.x === "number" && typeof mousePosition.y === "number";


  targetPos1.current = {
    x: -(mousePosition.x - width/2),
    y: -(mousePosition.y - height/2)
  };

  targetPos2.current = {
    x: -(mousePosition.x - width/2) + width/50,
    y: -(mousePosition.y - height/2) + height/50
  };

  return (
    <div className="App">
      <h1>
        {hasMovedCursor
          ? `Your cursor is at ${mousePosition.x}, ${mousePosition.y}.`
          : "Move your mouse around."}
      </h1>
      <SampleVideoFrame
        src="video/mov_bbb.mp4"
        screenSize={{height, width}}
        initPos={{x:100, y:100}}
        targetPos={targetPos1.current}
      />

      <SampleVideoFrame
        src="video/mov_bbb.mp4"
        screenSize={{height, width}}
        initPos={{x:200, y:300}}
        targetPos={targetPos2.current}
      />
    </div>
  );
}

export default App;
