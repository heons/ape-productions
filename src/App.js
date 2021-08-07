import './App.css';
import { useState, useCallback } from 'react';
import { Route, withRouter } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import ArtistDetail from './components/ArtistDetail'

function App({location}) {
    const categoryFromUrl = location?.search.split('?')[1];
    // console.log(location?.search.split('?')[1]);
    const [category, setCategory] = useState(undefined);

    const onSelectCategory = useCallback((item) => {
        setCategory(item);
    }, [setCategory]);

    // console.log(category);
    // console.log(category ? category : categoryFromUrl);
    return (
        <div className="App">
            <Menu category={category ? category : categoryFromUrl} onSelect={onSelectCategory}/>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/:title" component={ArtistDetail}/>
        </div>
    );
}

export default withRouter(App);
