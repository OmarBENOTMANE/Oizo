import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";

class EntryInfo extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <br />
                <h2 className="center">{t("Register.1")}</h2>
                <form>
                  <br />
                  <h2>{t("You.1")}</h2>
                  <div className="form-group">
                    <input
                      placeholder={t("FirstName.1")}
                      name="fname"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder={t("LastName.1")}
                      name="lname"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <h2>{t("YourPhone.1")}</h2>
                  <div className="form-group">
                    <input
                      placeholder={t("Phone.1")}
                      name="phone"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <h2>{t("YourAddress.1")}</h2>
                  <div className="form-group">
                    <input
                      placeholder={t("Number or Street name.1")}
                      name="address"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder={t("Postal code or city name.1")}
                      name="city"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder={t("Country.1")}
                      name="country"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <br />
                  <button className="button1">{t("Next.1")}</button>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const MyComponent = withTranslation()(EntryInfo);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
