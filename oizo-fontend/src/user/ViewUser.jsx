import React, { Component } from "react";
import UserService from "../services/UserService";
import { Trans } from "react-i18next";

class ViewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="card col-md-6 offset-md-3"
              style={{backgroundColor: "pink",}}>
          <br />
          <h3 className="text-center">
            <Trans>User Details.1</Trans>
          </h3>
          <div className="card-body">
            <div>
              <label>
                <Trans>First Name.1</Trans>:
              </label>{" "}
              {this.state.user.firstName}
            </div>
            <div>
              <label>
                <Trans>Last Name.1</Trans>:
              </label>{" "}
              {this.state.user.lastName}
            </div>
            <div>
              <label>
                <Trans>Email.1</Trans>:
              </label>{" "}
              {this.state.user.email}
            </div>
            <div>
              <label>
                <Trans>Phone.1</Trans>:
              </label>{" "}
              {this.state.user.phone}
            </div>
            <div>
              <label>
                <Trans>Address.1</Trans>:
              </label>{" "}
              {this.state.user.address}
            </div>
            <div>
              <label>
                <Trans>City.1</Trans>:
              </label>{" "}
              {this.state.user.city}
            </div>
            <div>
              <label>
                <Trans>Country.1</Trans>:
              </label>{" "}
              {this.state.user.country}
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default ViewUser;
