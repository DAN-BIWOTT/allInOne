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
              <Route path="/fullcrudRails" component={ FullcrudRails } />
              <Route component={ NoMatch } />
            </Switch>  
          </Router>
        </React.Fragment>
      );
    }

export default App;
