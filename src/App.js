import React from 'react';

 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './Home';
import About from './About';
import Errors from './Errors';
import Contact from './Contact';
import Navbar from './Navbar';
import services from './services';
import Footer from './Footer';

import {Switch, Route} from "react-router-dom";

const App = () => {

  return(

    <>

    <Navbar />

      <Switch>

        <Route exact path='/' component={Home} />

        <Route exact path='/about' component={About} />

        <Route exact path='/contact' component={Contact} />

        <Route exact path='/services' component={services} />

        <Route component={Errors} />

      </Switch>

  <Footer />


    </>

  );

};

export default App;
