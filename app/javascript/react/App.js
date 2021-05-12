
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SuperHeros from "./views/super_heros";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" exact component={SuperHeros} />
          <Route path="/super_heros" exact component={SuperHeros} />
        </Switch>
      </Router>
    </>
  )
}
export default App;