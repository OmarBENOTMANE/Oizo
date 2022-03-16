import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";

class Sign2 extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
          <div className="card col-md-6 offset-md-3">
            <br />
            <h2>{t("Sign in.1")}</h2>
            <div className="card-body">
              <form>
                <div className="col-sm-8">
                  <label> {t("Email.1")}:</label>
                  <input
                    placeholder="Email"
                    name="mail"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="col-sm-5">
                  <label>{t("Password.1")}: </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="millieu">
                <button className="btn btn-success" href="/home">{t("Save.1")}</button></div>
                <br />
                <br />
                <br />
                <button className="btn btn-primary">
                  {t("Sign in with Facebook.1")}
                </button>
                <br />
                <br />
                <button className="btn btn-danger">
                  {t("Sign in with Google.1")}
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
const MyComponent = withTranslation()(Sign2);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
