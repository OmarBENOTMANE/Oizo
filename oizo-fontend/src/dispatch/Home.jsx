import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="container">
        <br />
        <div className="card col-md-6 offset-md-3">
          <br />
          <br />
          <br />
          <br />
          <h1 className="col-centered">
            <letter style={{ color: "#00BFFF" }}>
              o
              <letter style={{ color: "orange" }}>
                i
                <letter style={{ color: "#03C03C" }}>
                  z<letter style={{ color: "red" }}>o</letter>
                </letter>
              </letter>
            </letter>
          </h1>
          <br />
          <br />
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
