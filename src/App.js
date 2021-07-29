import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'


function App() {
    return (
        <div className="App">
            <Route path="/" component={Home} exact={true}/>
        </div>
    );
}

export default App;
