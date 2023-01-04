import React from "react"
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./common/Header/Header";
import Pages from "./components/Pages/Pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pages />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
