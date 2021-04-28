import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

class NotFound extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br />
              <br />
              <br />
              <br />
              <div className="col-centered">
                <h5>
                  {t("Sorry we have not found a request for the moment.1")}.
                </h5>
                <h5> {t("It will come.1")}. ;)</h5>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Link className="button1" to="/newTrip">
                {t("New route.1")}
              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
const MyComponent = withTranslation()(NotFound);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
