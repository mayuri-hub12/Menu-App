import { useState } from "react";
import Home from "./Home";
import RestoName from "./RestoName";

import { EntreesServe } from "./RestoName";
import { Entrees } from "./Entrees";
import Drinks from "./Drinks";

import "./App.css";
import "./Menu.css";
import "./RestoName.css";``
import SearchBar from "./Searchbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Desserts from "./Desserts";
import Classic from "./Classic";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home></Home>
        <RestoName></RestoName>
        <SearchBar></SearchBar>
        <Routes>
          <Route path="/" element={<Entrees/>}></Route>
          <Route path="/Entrees" element={<Entrees/>}></Route>
          <Route path="/Drinks" element={<Drinks/>}></Route>
          <Route path="/Desserts" element={<Desserts/>}></Route>
          <Route path="/Classic" element={<Classic/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
