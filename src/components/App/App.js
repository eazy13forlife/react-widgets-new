import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Dropdown from "../Dropdown/Dropdown.js";
import Wikipedia from "../Wikipedia/Wikipedia.js";
import Accordion from "../Accordion/Accordion.js";
import Translate from "../Translate/Translate.js";
import Header from "../Header/Header.js";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Accordion} />
        <Route path="/wikipedia" exact component={Wikipedia} />
        <Route path="/dropdown" exact component={Dropdown} />
        <Route path="/translate" exact component={Translate} />
      </BrowserRouter>
    </div>
  );
};

export default App;
