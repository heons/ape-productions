import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import ArtistDetail from './components/ArtistDetail'

function App() {
    return (
        <div className="App">
            <Route path="/" component={Home} exact={true}/>
            <Route path="/:name" component={ArtistDetail}/>
        </div>
    );
}

export default App;
