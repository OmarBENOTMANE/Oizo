import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Trans } from "react-i18next";

class Msg extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="card col-md-6 offset-md-3">
            <br />
            <br />
            <br />
            <br />
            <div>
              avatar
            </div>
            <div className="col-centered">
              <Trans>Hello, I will be delighted to be your oizo.1</Trans>:)
              <Trans>I remain at your disposal to answer your questions. See you soon, Abdou.1</Trans>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link className="pannel millieu" type="submit">
            <Trans>Send.1</Trans>
            </Link>
            <br />
            <br />
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Msg;