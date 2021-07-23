import './App.css';
import SampleVideoFrame from './components/SampleVideoFrame';
import useWindowDimensions from './hooks/useWindowDimensions'

function App() {
  const { height, width } = useWindowDimensions();

  // console.log(height, width);
  return (
    <div className="App">
      <SampleVideoFrame
        pos={{x:10, y:10}}
        screenSize={{height, width}}
        src="video/mov_bbb.mp4"
      />
      <SampleVideoFrame
        pos={{x:200, y:180}}
        screenSize={{height, width}}
        src="video/mov_bbb.mp4"
      />
    </div>
  );
}

export default App;
