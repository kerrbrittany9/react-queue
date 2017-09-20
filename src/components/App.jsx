import React from "react";
import Header from "./Header";
import Queue from "./Queue";
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Queue} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
