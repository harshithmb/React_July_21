import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Posts />
      <Products />
    </div>
  );
}

export default App;
