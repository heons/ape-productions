import './App.css';
import { useState, useCallback } from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import ArtistDetail from './components/ArtistDetail'

function App() {

    const [category, setCategory] = useState(false);
    const onSelectCategory = useCallback((item) => {
        setCategory(item);
    }, [setCategory]);

    return (
        <div className="App">
            <Menu category={category} onSelect={onSelectCategory}/>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/:title" component={ArtistDetail}/>
        </div>
    );
}

export default App;
