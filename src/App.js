import './App.css';
import { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';

import qs from 'qs';
import ReactGA from 'react-ga';

import Home from './components/Home';
import Menu from './components/Menu';
// import ArtistDetail from './components/ArtistDetail';
import ArtistDetailPage from './components/ArtistDetailPage';
import PhotoList from './components/PhotoList';
import SEO from './components/SEO';

import 'bootstrap/dist/css/bootstrap.min.css';

function App({ location }) {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  // GA Practice.
  useEffect(() => {
    ReactGA.initialize('UA-208149030-1');
    // ReactGA.set({ dimension1: 'UserGroup1' });
    ReactGA.ga('set', 'dimension1', 'UserGroup1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  // ReactGA.ga('send', 'event', 'Video', 'play', 'cats.mp4', { dimension1: 'UserGroup1' });

  return (
    <div className="App">
      {/* <canvas id="canvas_test" width = "600" height = "600"
            style = {{"border": "1px solid black"}}>
                {}
            </canvas> */}
      <SEO
        title={`OH EUN HO`}
        description={`OH EUN HO production`}
        keywords={'OH EUN HO, OH EUNHO, EUNHO OH, 오은호, artist, 아티스트, film director, 필름 디렉터'}
      />
      <Menu category={query.category} pathname={location.pathname} />
      <Route path={`/`} exact={true} render={(props) => <Home {...props} category={query.category} />} />
      <Route path={`/:id`} component={ArtistDetailPage} exact={true} />
      <Route path={`/photo/:id`} component={PhotoList} />
    </div>
  );
}

export default withRouter(App);
