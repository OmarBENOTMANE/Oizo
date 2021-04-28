import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";

class TrajetDone extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br />
              <div className="col-centered">
                <h2 style={{ color: "green" }}>
                  {" "}
                  {t("Your trip has been created.1")}
                </h2>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="col-centered">
                <h5>
                  {t(
                    "We are looking for requests that may correspond to your journey.1"
                  )}
                  ...
                </h5>
              </div>
              <br />
              <br />
              <div className="col-centered">
                <h3>
                  <letter style={{ color: "blue" }}>o</letter>
                  <letter style={{ color: "gray" }}>i</letter>
                  <letter style={{ color: "gray" }}>z</letter>
                  <letter style={{ color: "gray" }}>o</letter>
                </h3>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
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
const MyComponent = withTranslation()(TrajetDone);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
