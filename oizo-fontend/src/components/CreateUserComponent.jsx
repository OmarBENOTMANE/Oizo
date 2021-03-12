import React, { Component } from "react";
import UserService from "../services/UserService";
import { Trans } from "react-i18next";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);
    // step 2
    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
      phone: "",
      address: "",
      city: "",
      country: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
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
          emailId: user.emailId,
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
      emailId: this.state.emailId,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
    };
    console.log("user => " + JSON.stringify(user));

    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        this.props.history.push("/users");
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.history.push("/users");
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
    this.setState({ emailId: event.target.value });
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
      return <h3 className="text-center">Add User</h3>;
    } else {
      return <h3 className="text-center"><Trans>UpdateUser.1</Trans></h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <h2>
                    <Trans>You.1</Trans>{" "}
                  </h2>
                  <br />
                  <div className="form-group">
                    <label>
                      {" "}
                      <Trans>FirstName.1</Trans> :{" "}
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
                      {" "}
                      <Trans>LastName.1</Trans>:{" "}
                    </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <h2>
                    <Trans>YourPhone.1</Trans>
                  </h2>
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
                  <h2>
                    <Trans>YourAddress.1</Trans>
                  </h2>
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
                      {" "}
                      <Trans>YourEmail.1</Trans>:{" "}
                    </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                  ><Trans>
                    Save.1</Trans>
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
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default CreateUserComponent;
