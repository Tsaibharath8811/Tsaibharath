
import './App.css';
import Header from "./components/Header";
import HeaderOne from "./components/HeaderOne";
import Cursole from './components/Cursole';
import CardSlider from './components/CardSlider';
import Box from './components/Box';
import Foot from './components/Foot';
import AllMoviesFetch from './components/AllMoviesFetch';
import Register from './components/Register';
import Success from './components/Success';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingleMovieFetch from './components/SingleMovieFetch';





function App() {
  return (
    <Router>
      <div>
        <Header />
        <HeaderOne />
        <Switch>
        <Route exact path="/">
            <Cursole />
            <CardSlider />
            <Box />
          </Route>
          <Route exact path="/movies">
           <AllMoviesFetch /> 
          </Route>
        <Route exact path="/movies/:movid">
          <SingleMovieFetch/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/success">
          <Success/>
        </Route>
          
        </Switch>
        <Foot/>
      </div>
    </Router>
  );
}

export default App;
