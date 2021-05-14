import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import Give from './pages/Give';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Adopt from './pages/Adopt';
import AdoptConfirm from './pages/AdoptConfirm';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/give" exact component={Give} />
      <Route path="/adopt" exact component={Adopt} />
      <Route path="/adopt-confirm" exact component={AdoptConfirm}></Route>
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;
