import React from 'react';
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Code from "./components/code/code";
import Details from "./components/details/details";


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Code />
      <Details />
    </div>
  );
}

export default App;
