import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Weather city="Frankfurt" />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
