import React from "react";
import Homepage from "./pages/homepage/homepage.compontent";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function HatsPage() {
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
