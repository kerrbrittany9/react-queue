import React from "react";
import Header from "./Header";
import Queue from "./Queue";
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
        <Switch>
            <Route exact path="/" component={Queue} />
            <Route path="/admin" component={Admin} />
            <Route component={Error404} />
        </Switch>
    </div>
  );
}

export default App;
