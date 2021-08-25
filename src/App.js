import './App.css';
import { Route, withRouter } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import ArtistDetail from './components/ArtistDetail'
import PhotoList from './components/PhotoList'
import qs from 'qs'
import 'bootstrap/dist/css/bootstrap.min.css';


function App({location, history}) {
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });

    return (
        <div className="App">
            {/* <canvas id="canvas_test" width = "600" height = "600"
            style = {{"border": "1px solid black"}}>
                {}
            </canvas> */}
            {/* <Menu category={category ? category : categoryFromUrl} onSelect={onSelectCategory}/> */}
            <Menu category={query.category} />    
            <Route
                path={`${process.env.PUBLIC_URL}/`}
                exact={true}
                render={(props) => (
                    <Home {...props} category={query.category}/>
                )}
            />
            <Route path={`${process.env.PUBLIC_URL}/:id`} component={ArtistDetail} exact={true}/>
            <Route path={`${process.env.PUBLIC_URL}/photo/:id`} component={PhotoList}/>
        </div>
    );
}

export default withRouter(App);
