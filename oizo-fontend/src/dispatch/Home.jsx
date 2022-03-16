import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
        <div className="card col-md-6 offset-md-3">
          <br />
          <br />
          <br />
          <br />
          <h1 className="col-centered">
          <span style={{ color: "#00BFFF" }}>o</span>
            <span style={{ color: "orange" }}>i</span>
            <span style={{ color: "#03C03C" }}>z</span>
            <span style={{ color: "red" }}>o</span>
          </h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to="/nextTrip" className="button1">
            <h5>{t("BecomeOizo.1")}</h5>
          </Link>
          <br />
          <br />
          <Link to="/home" className="button1">
            <h5>{t("FindOizo.1")}</h5>
          </Link>
          <br />
          <br />
          <br />
        </div>
    );
  }
}
const MyComponent = withTranslation()(Home);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
