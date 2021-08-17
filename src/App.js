import './App.css';
import { Route, withRouter } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import ArtistDetail from './components/ArtistDetail'
import qs from 'qs'

function App({location, history}) {
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    console.log(query.category);

    return (
        <div className="App">
            {/* <Menu category={category ? category : categoryFromUrl} onSelect={onSelectCategory}/> */}
            <Menu category={query.category} />    
            <Route
                path="/"
                exact={true}
                render={(props) => (
                    <Home {...props} category={query.category}/>
                )}
            />
            <Route path="/:id" component={ArtistDetail}/>
        </div>
    );
}

export default withRouter(App);
