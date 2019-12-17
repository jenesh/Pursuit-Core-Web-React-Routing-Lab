import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Dog from "./Components/Dog";
import Cat from "./Components/Cat";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dog/:num" component={Dog} />
        <Route path="/dog/" component={Dog} />
        <Route path="/cat" component={Cat} />
      </Switch>
    </div>
  );
}

export default App;