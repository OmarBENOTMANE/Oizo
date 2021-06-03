import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";

class EntryCode extends Component {
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
              <button className="button1 pannel">{t("Next.1")}</button>
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
const MyComponent = withTranslation()(EntryCode);
// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
