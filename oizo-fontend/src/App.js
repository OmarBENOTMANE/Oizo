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

import Sign1 from "./auth/Sign1";
import Sign2 from "./auth/Sign2";
import Sign4 from "./auth/Sign4";

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
            {/*  */}
            <Route exact path="/sign1" component={Sign1} />
            <Route exact path="/sign2" component={Sign2} />
            <Route exact path="/Sign4" component={Sign4} />
            {/*  */}
            <Route exact path="/users" component={ListUser} />
            <Route exact path="/add-user/:id" component={CreateUser} />
            <Route exact path="/view-user/:id" component={ViewUser} />
            {/*  */}
            <Route exact path="/foto" component={Foto} />
            <Route exact path="/info" component={Info} />
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
            <Route exact path="/view-trip/:id" component={ViewTrip} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </React.Fragment>
  );
}

export default App;
