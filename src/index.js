import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./Home";
import Shop from "./Shop";
import "./index.css"

const Routes = () => {
  return (
      <div>
    <BrowserRouter>
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));