import React, { Component } from "react";
import UserService from "../services/UserService";
import { Trans } from "react-i18next";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    // step 2
    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changeCountryHandler = this.changeCountryHandler.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }
  // step 3
  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          address: user.address,
          city: user.city,
          country: user.country,
        });
      });
    }
  }
  // step 4
  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
    };
    console.log("user => " + JSON.stringify(user));

    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        this.props.history.push("/sign4");
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.history.push("/home");
      });
    }
  };
  // step 5
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePhoneHandler = (event) => {
    this.setState({ phone: event.target.value });
  };
  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changeCityHandler = (event) => {
    this.setState({ city: event.target.value });
  };
  changeCountryHandler = (event) => {
    this.setState({ country: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return (
        <h1 className="text-center">
          <Trans>Add User.1</Trans>
        </h1>
      );
    } else {
      return (
        <h3 className="text-center">
          <Trans>UpdateUser.1</Trans>
        </h3>
      );
    }
  }
  render() {
    return (
      <div className="container">
        <br />
        <div className="card col-md-6 offset-md-3"
        style={{ backgroundColor: "pink"}}>
          <br />
          {this.getTitle()}
          <div className="card-body">
            <form>
              <h2><Trans>You.1</Trans></h2>
              <br />
              <div className="form-group">
                <label>
                  <Trans>First Name.1</Trans> :
                </label>
                <input
                  placeholder="First Name"
                  name="firstName"
                  className="form-control"
                  value={this.state.firstName}
                  onChange={this.changeFirstNameHandler}
                />
              </div>
              <div className="form-group">
                <label>
                  <Trans>Last Name.1</Trans>:
                </label>
                <input
                  placeholder="Last Name"
                  name="lastName"
                  className="form-control"
                  value={this.state.lastName}
                  onChange={this.changeLastNameHandler}
                />
              </div>
              <h2><Trans>Your Phone.1</Trans></h2>
              <br />
              <div className="form-group">
                <input
                  placeholder="Phone"
                  name="phone"
                  className="form-control"
                  value={this.state.phone}
                  onChange={this.changePhoneHandler}
                />
              </div>
              <br />
              <h2><Trans>Your Address.1</Trans></h2>
              <div className="form-group">
                <input
                  placeholder="Number or Street name"
                  name="address"
                  className="form-control"
                  value={this.state.address}
                  onChange={this.changeAddressHandler}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Postal code or city name"
                  name="city"
                  className="form-control"
                  value={this.state.city}
                  onChange={this.changeCityHandler}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Country"
                  name="country"
                  className="form-control"
                  value={this.state.country}
                  onChange={this.changeCountryHandler}
                />
              </div>
              <br />
              <div className="form-group">
                <label>
                  <Trans>Your Email.1</Trans>:
                </label>
                <input
                  placeholder="Email Address"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.changeEmailHandler}
                />
              </div>
              <button
                className="btn btn-success"
                onClick={this.saveOrUpdateUser}
              >
                <Trans>Save.1</Trans>
              </button>
              <button
                className="btn btn-danger"
                onClick={this.cancel.bind(this)}
                style={{ marginLeft: "10px" }}
              >
                <Trans>Cancel.1</Trans>
              </button>
            </form>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default CreateUser;
