import './App.css';
import { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom'
import Home from './components/Home'
// import Menu from './components/Menu'
import MenuM from './components/MenuM'
import ArtistDetail from './components/ArtistDetail'
import PhotoList from './components/PhotoList'
import qs from 'qs'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';


function App({location, history}) {
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });

    useEffect(() => {
        ReactGA.initialize('UA-208149030-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div className="App">
            {/* <canvas id="canvas_test" width = "600" height = "600"
            style = {{"border": "1px solid black"}}>
                {}
            </canvas> */}
            {/* <Menu category={category ? category : categoryFromUrl} onSelect={onSelectCategory}/> */}
            <MenuM category={query.category}></MenuM>
            {/* <Menu category={query.category} /> */}
            <Route
                path={`/`}
                exact={true}
                render={(props) => (
                    <Home {...props} category={query.category}/>
                )}
            />
            <Route path={`/:id`} component={ArtistDetail} exact={true}/>
            <Route path={`/photo/:id`} component={PhotoList}/>
        </div>
    );
}

export default withRouter(App);
