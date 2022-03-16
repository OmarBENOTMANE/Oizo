import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

class Sign1 extends Component {
 

  render() {
    const { t } = this.props;
    return (
     <div className="card col-md-6 offset-md-3">
        <br />
        <br />
        <br />
        <br />
        <h3 className="text-center">logo</h3>
        <br />
        <br />
        <br />
        <div>
          <h1 className="text-center">
            <span style={{ color: "#00BFFF" }}>o</span>
            <span style={{ color: "orange" }}>i</span>
            <span style={{ color: "#03C03C" }}>z</span>
            <span style={{ color: "red" }}>o</span>
          </h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button type="button" className="button1">
          {t("Enterprise.1")}
        </button>
        <br />
        <br />
        <Link type="button" className="button1" to="/add-user/_add">
          {t("Particular.1")}
        </Link>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

const MyComponent = withTranslation()(Sign1);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
