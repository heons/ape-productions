import './App.css';
import SampleVideoFrame from './components/SampleVideoFrame';
import useWindowDimensions from './hooks/useWindowDimensions'
import useMousePosition from './hooks/useMousePosition';
import { useState, useEffect, useRef } from 'react';


function App() {
  const { height, width } = useWindowDimensions();
  const { mousePosition, mouseSpeed }= useMousePosition();
  console.log(mouseSpeed);

  const speed = useRef({x: 0, y: 0});
  const isMouseLeftOnScreen = useRef(width/2 > mousePosition.x);

  const hasMovedCursor = typeof mousePosition.x === "number" && typeof mousePosition.y === "number";

  isMouseLeftOnScreen.current = width/2 > mousePosition.x;
  // console.log(isMouseLeftOnScreen);
  // useEffect(() => {
  //   // const speedRatio = 50;
  //   // const moveSpeedX = (width/2 - mousePosition.x) / speedRatio;
  //   // const moveSpeedY = (height/2 - mousePosition.y) / speedRatio;
  //   // const calcSpeed = { x: moveSpeedX, y: moveSpeedY };
  //   // console.log(calcSpeed);
  //   let moveTimer = setInterval(() => {
     
  //     setSeconds(seconds => seconds + 1);
  //     // setSpeed(mousePosition => ({x: mousePosition.x + 1, y: mousePosition.y + 1}));
  //     // setSpeed(speed => ({x: speed.x + 1, y: speed.y + 1}));
  //     // console.log(seconds);
  //   }, 1000);
  //   return () => clearInterval(moveTimer);
  // }, []);

  const minLimit = -100;
  const maxLimit = 100;

  const speedRatio = 1000;
  const moveSpeedX = (width/2 - mousePosition.x) / speedRatio;
  const moveSpeedY = (height/2 - mousePosition.y) / speedRatio;
  const calcSpeed = { x: moveSpeedX, y: moveSpeedY };

  // speed.current = {
  //   x: Math.max(Math.min(speed.current.x + calcSpeed.x, maxLimit), minLimit),
  //   y: Math.max(Math.min(speed.current.y + calcSpeed.y, maxLimit), minLimit),
  // };
  speed.current = {
    x: Math.max(Math.min(speed.current.x + mouseSpeed.x/100, maxLimit), minLimit),
    y: Math.max(Math.min(speed.current.y + mouseSpeed.y/100, maxLimit), minLimit),
  };
      
  // console.log(speed.current);
  // console.log(height, width);

  return (
    <div className="App">
      <h1>
        {hasMovedCursor
          ? `Your cursor is at ${mousePosition.x}, ${mousePosition.y}.`
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
        addPos={{x: -speed.current.x, y: -speed.current.y}}
        src="video/mov_bbb.mp4"
      />
    </div>
  );
}

export default App;
