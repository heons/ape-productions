import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import ArtistDetail from './components/ArtistDetail'

function App() {
    return (
        <div className="App">
            <Menu/>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/:title" component={ArtistDetail}/>
        </div>
    );
}

export default App;
