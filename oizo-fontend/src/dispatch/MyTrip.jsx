import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";

class MyTrip extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h2>{t("My journeys.1")}</h2>
              <br />
              <span>{t("Waiting for your reply.1")}</span>
              <div className="cadre-rose">
              <div>Paris</div>
              <div>|</div>
              <div>
                Casa <span className="posi30">20/01/2021</span>
              </div></div>
              <br />
              <div className="cadre-rose">
              <div>Fes</div>
              <div>|</div>
              <div>
                Lyon <span className="posi30">20/01/2021</span>
              </div></div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <button type="button" className="button1">
                {t("New journey.1")}
              </button>
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
