import React, { Component, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

class Deliver extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br />
              <h1>... {t(" and you can transport.1")}</h1>
              <br />

              <h5>{t("Lettre/Document.1")}</h5>

              <br />
              <h5>{t("Medicine.1")}</h5>
              <br />
              <h5>{t("Parcel.1")}</h5>
              <br />
              <h5>
                {t("Potential gain.1")}
                {"               "}
              </h5>
              <br />
              <h7>
                {t("Document.1")}
                {"                   "}3$
              </h7>
              <br />
              <h7>
                {t("Medicine box.1")}
                {"                "}2$
              </h7>
              <br />
              <h7>
                {t("Parcel.1")}(1kg){"             "}10$
              </h7>
              <br />
              <h7>
                {t(
                  "You are responsible for shipping the package in good condition and validating its receipt with the recipient.1"
                )}
                .
              </h7>
              <br />
              <br />
              <br />
              <Link to="/pathCreated" className="button1">
                {t("Complete.1")}
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
const MyComponent = withTranslation()(Deliver);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
