import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

class MsgSent extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <div className="container">
          <div className="card col-md-6 offset-md-3">
            <br />
            <br />
            <br />
            <br />
            <div className="col-centered">
              {t("Votre message a bien ete envoye.1")}.
            </div>
            <br />
            <br />
            icon
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link className="button1" to="/add-trip/:id">
              {t("New route.1")}
            </Link>
            <br />
            <br />
          </div>
        </div>
        <br />
      </div>
    );
  }
}
const MyComponent = withTranslation()(MsgSent);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
