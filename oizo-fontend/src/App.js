import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ListUserComponent from "./components/ListUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateUserComponent from "./components/CreateUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";
import ViewUserComponent from "./components/ViewUserComponent";


import Oizo from "./begin/Oizo";
import EntryChoice from "./begin/EntryChoice";
import EntryCode from "./begin/EntryCode";
import EntryInfo from "./begin/EntryInfo";

function App() {
  return (
    <div style={{
      backgroundColor: 'pink',}}>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/oizo" exact component={Oizo}></Route>
            <Route path="/entryChoice" exact component={EntryChoice}></Route>
            <Route path="/entryCode" exact component={EntryCode}></Route>
            <Route path="/entryInfo" exact component={EntryInfo}></Route>
            <Route path="/users" component={ListUserComponent}></Route>
            <Route
              path="/add-user/:id"
              component={CreateUserComponent}
            ></Route>
            <Route
              path="/view-user/:id"
              component={ViewUserComponent}
            ></Route>
            {/* <Route path = "/update-user/:id" component = {UpdateUserComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
