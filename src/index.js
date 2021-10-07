import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Weather />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
