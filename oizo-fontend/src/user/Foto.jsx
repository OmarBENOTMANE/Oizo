import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";
import mainLogo from "../addLogo.png";

export class MyTrip extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <div className="container">
            <div className="card col-md-6 offset-md-3 offset-md-3">
            <br />
              <h2>{t("Congratulations Abdou.1")}</h2>
              <br />
              <span>{t("Your account has been created.1")} !</span>
              <br />
              <br />
              <br />
              <br />
              <h3>{t("Your best photo or not.1")} ;)</h3>
              <br />
              <div>
                <img src={mainLogo} alt="addimage" width="110" height="90" />
              </div>
              <br />
              <br />
              <br />
              <br />
              <button type="button" className="button1">
                {t("Complete.1")}
              </button>
              <br />
              <br />
            </div>
          </div>
        <br />
      </div>
    );
  }
}
const MyComponent = withTranslation()(MyTrip);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
