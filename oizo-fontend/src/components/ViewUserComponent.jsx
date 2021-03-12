import React, { Component } from "react";
import UserService from "../services/UserService";
import { Trans } from 'react-i18next';

class ViewUserComponent extends Component {
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
      <div>
        <br />
        <div className="card col-md-6 offset-md-3">
        <br />
          <h3 className="text-center"> View user Details</h3>
          <div className="card-body">
            <div className="row">
              <label>  <Trans>FirstName.1</Trans>: </label>
              <div>  -{this.sta.firstName}</div>
            </div>
            <div className="row">
              <label> <Trans>LastName.1</Trans>: </label>
              <div> -{this.state.user.lastName} </div>
            </div>
            <div className="row">
              <label> <Trans>Email.1</Trans>: </label>
              <div> -{this.state.user.emailId}</div>
            </div>
            <div className="row">
              <label> <Trans>Phone.1</Trans>: </label>
              <div> -{this.state.user.phone}</div>
              </div>
              <div className="row">
              <label><Trans>Address.1</Trans>: </label>
              <div>- {this.state.user.address}</div>
              </div>
              <div className="row">
              <label> <Trans>City.1</Trans>: </label>
              <div> -{this.state.user.city}</div>
              </div>
              <div className="row">
              <label> <Trans>Country.1</Trans>: </label>
              <div> -{this.state.user.country}</div>
              </div>
          </div>
        </div>
        <br /><br />
      </div>
    );
  }
}

export default ViewUserComponent;
