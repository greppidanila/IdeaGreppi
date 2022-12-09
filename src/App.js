import React from "react"
import "./App.css"
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact>
            <About />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
