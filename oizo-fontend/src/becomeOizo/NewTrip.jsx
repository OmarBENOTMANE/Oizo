import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

class NextTrip extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br />
              <h1>{t("Your Next Trip.1")}</h1>
              <br />

              <h5>{t("Departure.1")}</h5>
              <div className="form-group">
                <input
                  placeholder={t("Departure.1")}
                  name="fname"
                  className="form-control"
                />
              </div>
              <br />
              <h5>{t("Arrival.1")}</h5>
              <div className="form-group">
                <input
                  placeholder={t("Arrival.1")}
                  name="fname"
                  className="form-control"
                />
              </div>
              <br />
              <h5>{t("Date of departure.1")}</h5>
              <div className="form-group">
                <input
                  placeholder={t("Date of departure.1")}
                  name="fname"
                  className="form-control"
                />
              </div>
              <br />
              <h5>{t("Departure time.1")}</h5>
              <div className="form-group">
                <input
                  placeholder={t("Departure time.1")}
                  name="fname"
                  className="form-control"
                />
              </div>
              <br />
              <h5>{t("Arrival date.1")}</h5>
              <div className="form-group">
                <input
                  placeholder={t("Arrival date.1")}
                  name="fname"
                  className="form-control"
                />
              </div>
              <br />
              <h5>{t("Arriving time.1")}</h5>
              <div className="form-group">
                <input
                  placeholder={t("Arriving time.1")}
                  name="fname"
                  className="form-control"
                />
              </div>
              <br />
              <button type="button">
                {t("Means of transport (optional).1")}
              </button>
              <br />
              <br />
              <br />
              <Link to="/deliver" className="button1">
                {t("Next.1")}
              </Link>
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
const MyComponent = withTranslation()(NextTrip);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
