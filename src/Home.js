import React from 'react';
import Navigation from './components/Navigation';
import bg1 from './images/bg1.jpg';

const Home = () => 
{
    return(
        <div  styles={{ backgroundImage:`url(${bg1})` }}>
          <Navigation></Navigation>            
        </div>
        );
}

export default Home;