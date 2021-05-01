import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/badges' component={Badges} />
        <Route exact path='/badges/news' component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
