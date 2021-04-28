import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

import ListUser from "./user/ListUser";
import CreateUser from "./user/CreateUser";
//import UpdateUser from "./user/UpdateUserComponent";
import ViewUser from "./user/ViewUser";
import Foto from "./user/Foto";

import Oizo from "./begin/Oizo";
import EntryChoice from "./begin/EntryChoice";
import EntryCode from "./begin/EntryCode";
import EntryInfo from "./begin/EntryInfo";

//import NewTrip from "./becomeOizo/NewTrip";
import Deliver from "./becomeOizo/Deliver";
import PathCreated from "./becomeOizo/PathCreated";
import NotFound from "./becomeOizo/NotFound";

import Home from "./dispatch/Home";
import MyTrip from "./dispatch/MyTrip";

import ListTrip from "./trip/ListTrip";
import CreateTrip from "./trip/CreateTrip";
//import UpdateTrip from "./trip/UpdateTrip";
import ViewTrip from "./trip/ViewTrip";

import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div
      style={{
        backgroundColor: "pink",
      }}
    >
      <Router>
        <HeaderComponent />
        <button onClick={() => handleClick("en")} className="butrans">
          English
        </button>
        <button onClick={() => handleClick("fr")} className="butrans">
          French
        </button>
        <div className="container">
          <Switch>
            <Route exact path="/users" component={ListUser} />
            <Route exact path="/add-user/:id" component={CreateUser} />
            <Route exact path="/view-user/:id" component={ViewUser} />
            {/* <Route path = "/update-user/:id" component = {UpdateUser} /> */}
            <Route exact path="/foto" component={Foto} />
            {/*  */}
            <Route exact path="/oizo" component={Oizo} />
            <Route exact path="/entryChoice" component={EntryChoice} />
            <Route exact path="/entryCode" component={EntryCode} />
            <Route exact path="/entryInfo" component={EntryInfo} />
            {/* */}
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/newTrip" component={NewTrip} /> */}
            <Route exact path="/deliver" component={Deliver} />
            <Route exact path="/pathCreated" component={PathCreated} />
            <Route exact path="/notFound" component={NotFound} />
            <Route exact path="/myTrip" component={MyTrip} />
            {/* */}
            <Route exact path="/add-trip/:id" component={CreateTrip} />
            <Route exact path="/trips" component={ListTrip} />
           {/* <Route exact path="/update_trip/:id" component={UpdateTrip} />  */}
            <Route exact path="/view-trip/:id" component={ViewTrip} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
