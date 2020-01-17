import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Home';
import FoodApp from './FoodApp';
import Blockchain from './Blockchain';
import NoMatch from './NoMatch';
import Fullcrud from './Fullcrud';
import FullcrudRails from './FullcrudRails';
import JokeCategories from './components/fullcrud/JokeCategories';
import JokeExplicit from './components/fullcrud/JokeExplicit';
import JokeSimple from './components/fullcrud/JokeSimple';

const App = () => 
{
      return (
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/foodapp" component={ FoodApp } />
              <Route path="/blockchain" component={ Blockchain } />
              <Route exact path="/fullcrud" component={ Fullcrud } />
              <Route exact path="/fullcrud/jokecategory" component={ JokeCategories } />
              <Route exact path="/fullcrud/jokeExplicit" component={ JokeExplicit } />
              <Route exact path="/fullcrud/jokeSimple" component={ JokeSimple } />
              <Route path="/fullcrudRails" component={ FullcrudRails } />
              <Route component={ NoMatch } />
            </Switch>  
          </Router>
        </React.Fragment>
      );
    }

export default App;
