import './App.css';
import SampleVideoFrame from './components/SampleVideoFrame';
import useWindowDimensions from './hooks/useWindowDimensions'
import useMousePosition from './hooks/useMousePosition';


function App() {
  const { height, width } = useWindowDimensions();
  const { x: mX, y: mY } = useMousePosition();

  const hasMovedCursor = typeof mX === "number" && typeof mY === "number";

  // console.log(height, width);
  // console.log(mX, mY);
  return (
    <div className="App">
      <h1>
        {hasMovedCursor
          ? `Your cursor is at ${mX}, ${mY}.`
          : "Move your mouse around."}
      </h1>
      <SampleVideoFrame
        initPos={{x:10, y:10}}
        screenSize={{height, width}}
        src="video/mov_bbb.mp4"
      />
      <SampleVideoFrame
        initPos={{x:200, y:180}}
        screenSize={{height, width}}
        src="video/mov_bbb.mp4"
      />
    </div>
  );
}

export default App;
