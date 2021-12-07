import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

import ListUser from "./user/ListUser";
import CreateUser from "./user/CreateUser";
import ViewUser from "./user/ViewUser";

import Foto from "./user/Foto";
import Info from "./page/Info";

import Oizo from "./begin/Oizo";
import Authentification from "./begin/Authentification";
import EntryCode from "./begin/EntryCode";

import Deliver from "./becomeOizo/Deliver";
import PathCreated from "./becomeOizo/PathCreated";
import NotFound from "./becomeOizo/NotFound";
import MsgSent from "./becomeOizo/MsgSent";
import Msg from "./becomeOizo/Msg";
import Home from "./dispatch/Home";
import MyTrip from "./dispatch/MyTrip";

import ListTrip from "./trip/ListTrip";
import CreateTrip from "./trip/CreateTrip";
import ViewTrip from "./trip/ViewTrip";

import { useTranslation } from "react-i18next";

function App() {
  useTranslation();
  return (
    <React.Fragment>
      <Router>
        <HeaderComponent />
        <div>
          <Switch>
            <Route exact path="/users" component={ListUser} />
            <Route exact path="/add-user/:id" component={CreateUser} />
            <Route exact path="/view-user/:id" component={ViewUser} />
            {/* <Route path = "/update-user/:id" component = {UpdateUser} /> */}
            {/*  */}
            <Route exact path="/foto" component={Foto} />
            <Route exact path="/info" component={Info} />
            {/*  */}
            <Route exact path="/oizo" component={Oizo} />
            <Route exact path="/authentification" component={Authentification} />
            <Route exact path="/entryCode" component={EntryCode} />
            {/* */}
            <Route exact path="/home" component={Home} />
            <Route exact path="/deliver" component={Deliver} />
            <Route exact path="/pathCreated" component={PathCreated} />
            <Route exact path="/notFound" component={NotFound} />
            <Route exact path="/myTrip" component={MyTrip} />
            <Route exact path="/msgSent" component={MsgSent} />
            <Route exact path="/msg" component={Msg} />
            {/* */}
            <Route exact path="/add-trip/:id" component={CreateTrip} />
            <Route exact path="/trips" component={ListTrip} />
            {/* <Route exact path="/update_trip/:id" component={UpdateTrip} />  */}
            <Route exact path="/view-trip/:id" component={ViewTrip} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </React.Fragment>
  );
}

export default App;
