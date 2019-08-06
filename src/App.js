import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import PDF from './pages/PDF';
import Image from './pages/Image';

export default () => <Router>
  <Route path="/pdf" exact component={PDF}/>
  <Route path="/image" exact component={Image}/>
</Router>;
