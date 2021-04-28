import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";

class EntryChoice extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br />
              <h2>{t("Sign up.1")}</h2>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> {t("Email.1")}:</label>
                    <input
                      placeholder="Email"
                      name="mail"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>{t("Password.1")}: </label>
                    <input
                      placeholder="password"
                      name="password"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <button className="button1">{t("Save.1")}</button>
                  <br />
                  <br />
                  <button className="btn btn-primary">
                    {t("Sign up with Facebook.1")}
                  </button>
                  <br />
                  <br />
                  <button className="btn btn-danger">
                    {t("Sign up with Google.1")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const MyComponent = withTranslation()(EntryChoice);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
