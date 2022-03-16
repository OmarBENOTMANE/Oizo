import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

class Sign4 extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <div className="container">
          <div
            className="card col-md-6 offset-md-3"
            style={{ backgroundColor: "pink" }}
          >
            <br />
            <div className="card-body">
              <div>
                <label className="millieu">
                  {" "}
                  {t("Enter your code received by sms.1")}{" "}
                </label>
                <br />
                <br />
                <input
                  placeholder="Code"
                  name="codesms"
                  className="form-control"
                />
              </div>
              <br />
              <br />
              <br />
              <br />
              <Link type="button" className="button1 pannel" to="/foto">{t("Next.1")}</Link>
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
const MyComponent = withTranslation()(Sign4);
// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
