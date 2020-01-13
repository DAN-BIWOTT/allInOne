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

const App = () => 
{
      return (
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/foodapp" component={ FoodApp } />
              <Route path="/blockchain" component={ Blockchain } />
              <Route path="/fullcrud" component={ Fullcrud } />
              <Route path="/fullcrudRails" component={ FullcrudRails } />
              <Route component={ NoMatch } />
            </Switch>  
          </Router>
        </React.Fragment>
      );
    }

export default App;
