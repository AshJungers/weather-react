import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Denver" />
    </div>
  );
}

export default App;
