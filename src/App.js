import './App.css';
import SampleVideoFrame from './components/SampleVideoFrame';
import useWindowDimensions from './hooks/useWindowDimensions'
import useMousePosition from './hooks/useMousePosition';
import { useState, useEffect, useRef } from 'react';


function App() {
  const { height, width } = useWindowDimensions();
  const mousePos = useMousePosition();

  const speed = useRef({x: 0, y: 0});
  const isMouseLeftOnScreen = useRef(width/2 > mousePos.x);

  const hasMovedCursor = typeof mousePos.x === "number" && typeof mousePos.y === "number";

  isMouseLeftOnScreen.current = width/2 > mousePos.x;
  console.log(isMouseLeftOnScreen);
   
  // useEffect(() => {
  //   // const speedRatio = 50;
  //   // const moveSpeedX = (width/2 - mousePos.x) / speedRatio;
  //   // const moveSpeedY = (height/2 - mousePos.y) / speedRatio;
  //   // const calcSpeed = { x: moveSpeedX, y: moveSpeedY };
  //   // console.log(calcSpeed);
  //   let moveTimer = setInterval(() => {
     
  //     setSeconds(seconds => seconds + 1);
  //     // setSpeed(mousePos => ({x: mousePos.x + 1, y: mousePos.y + 1}));
  //     // setSpeed(speed => ({x: speed.x + 1, y: speed.y + 1}));
  //     // console.log(seconds);
  //   }, 1000);
  //   return () => clearInterval(moveTimer);
  // }, []);

  const minLimit = -100;
  const maxLimit = 100;

  const speedRatio = 100;
  const moveSpeedX = (width/2 - mousePos.x) / speedRatio;
  const moveSpeedY = (height/2 - mousePos.y) / speedRatio;
  const calcSpeed = { x: moveSpeedX, y: moveSpeedY };

  speed.current = {
    x: Math.max(Math.min(speed.current.x + calcSpeed.x, maxLimit), minLimit),
    y: Math.max(Math.min(speed.current.y + calcSpeed.y, maxLimit), minLimit),
  };
      
  console.log(speed.current);
  // console.log(height, width);

  return (
    <div className="App">
      <h1>
        {hasMovedCursor
          ? `Your cursor is at ${mousePos.x}, ${mousePos.y}.`
          : "Move your mouse around."}
      </h1>
      <SampleVideoFrame
        initPos={{x:10, y:10}}
        screenSize={{height, width}}
        addPos={speed.current}
        src="video/mov_bbb.mp4"
      />
      <SampleVideoFrame
        initPos={{x:200, y:180}}
        screenSize={{height, width}}
        addPos={speed.current}
        src="video/mov_bbb.mp4"
      />
    </div>
  );
}

export default App;
