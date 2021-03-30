import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import "../../styles/main.scss";

import Dropdown from "../Dropdown/Dropdown.js";
import Wikipedia from "../Wiki/";
import Accordion from "../Accordion/Accordion.js";
import Translate from "../Translate/";
import Header from "../Header/Header.js";
import DropdownPage from "../Dropdown/";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Accordion} />
        <Route path="/wikipedia" exact component={Wikipedia} />
        <Route path="/dropdown" exact component={DropdownPage} />
        <Route path="/translate" exact component={Translate} />
      </BrowserRouter>
    </div>
  );
};

export default App;
