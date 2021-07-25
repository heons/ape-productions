import './App.css';
import SampleVideoFrame from './components/SampleVideoFrame';
import useWindowDimensions from './hooks/useWindowDimensions'
import useMousePosition from './hooks/useMousePosition';
import { useState, useEffect, useRef } from 'react';


function App() {
  const { height, width } = useWindowDimensions();
  const { mousePosition, mouseSpeed }= useMousePosition();
  console.log(mouseSpeed);

  const speedGroup1 = useRef({x: 0, y: 0});
  const speedGroup2 = useRef({x: 0, y: 0});
  const isMouseLeftOnScreen = useRef(width/2 > mousePosition.x);

  const [counters, setCounters] = useState(0);

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
  //     // setSpeed(speedGroup1 => ({x: speedGroup1.x + 1, y: speedGroup1.y + 1}));
  //     // console.log(seconds);
  //   }, 1000);
  //   return () => clearInterval(moveTimer);
  // }, []);

  useEffect(() => {
    let moveTimer = setInterval(() => {
      // setSpeed(mousePosition => ({x: mousePosition.x + 1, y: mousePosition.y + 1}));
      // setSpeed(speedGroup1 => ({x: speedGroup1.x + 1, y: speedGroup1.y + 1}));
      // console.log(seconds);
      setCounters(counters => counters + 1);
    }, 1000);
    return () => clearInterval(moveTimer);
  }, []);

  const minLimit = -100;
  const maxLimit = 100;

  const speedRatio = 1000;
  const moveSpeedX = (width/2 - mousePosition.x) / speedRatio;
  const moveSpeedY = (height/2 - mousePosition.y) / speedRatio;
  const calcSpeed = { x: moveSpeedX, y: moveSpeedY };

  // speedGroup1.current = {
  //   x: Math.max(Math.min(speedGroup1.current.x + calcSpeed.x, maxLimit), minLimit),
  //   y: Math.max(Math.min(speedGroup1.current.y + calcSpeed.y, maxLimit), minLimit),
  // };

  speedGroup1.current = {
    x: Math.max(Math.min(speedGroup1.current.x + mouseSpeed.x/100, maxLimit), minLimit),
    y: Math.max(Math.min(speedGroup1.current.y + mouseSpeed.y/100, maxLimit), minLimit),
  };

  speedGroup2.current = {
    x: Math.max(Math.min(speedGroup2.current.x + mouseSpeed.x/50, maxLimit), minLimit),
    y: Math.max(Math.min(speedGroup2.current.y + mouseSpeed.y/50, maxLimit), minLimit),
  };

  // if (isMouseLeftOnScreen) {
  //   speedGroup1.current = {
  //     x: Math.max(Math.min(speedGroup1.current.x -1, maxLimit), minLimit),
  //     y: Math.max(Math.min(speedGroup1.current.y, maxLimit), minLimit),
  //   };
  // }
      
  // console.log(speedGroup1.current);
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
        addPos={speedGroup1.current}
        src="video/mov_bbb.mp4"
      />
      <SampleVideoFrame
        initPos={{x:200, y:180}}
        screenSize={{height, width}}
        addPos={speedGroup2.current}
        src="video/mov_bbb.mp4"
      />
    </div>
  );
}

export default App;
