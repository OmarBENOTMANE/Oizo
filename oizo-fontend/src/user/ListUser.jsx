import React, { Component } from "react";
import UserService from "../services/UserService";
import { Trans } from "react-i18next";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    });
  }
  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }
  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.props.history.push("/add-user/_add");
  }

  render() {
    return (
      <div>
        <br />
        <h2 className="text-center">
          <Trans>UsersList.1</Trans>
        </h2>
        <br />
        <div
          className="card"
          style={{
            backgroundColor: "pink",
          }}>
          <div className="card-body">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>
                    <Trans>First Name.1</Trans>
                  </th>
                  <th>
                    <Trans>Last Name.1</Trans>
                  </th>
                  <th>
                    <Trans>Email.1</Trans>
                  </th>
                  <th>
                    <Trans>Phone.1</Trans>
                  </th>
                  <th>
                    <Trans>Address.1</Trans>
                  </th>
                  <th>
                    <Trans>City.1</Trans>
                  </th>
                  <th>
                    <Trans>Country.1</Trans>
                  </th>
                  <th>Actions</th>
                  <th>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={this.addUser}
                    > +
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.id}>
                    <td> {user.firstName} </td>
                    <td> {user.lastName}</td>
                    <td> {user.email}</td>
                    <td> {user.phone}</td>
                    <td> {user.address}</td>
                    <td> {user.city}</td>
                    <td> {user.country}</td>
                    <td>
                      <button
                        onClick={() => this.editUser(user.id)}
                        className="btn btn-outline-warning btn-sm"
                      >
                        <Trans>Update.1</Trans>
                      </button>
                      <button
                        onClick={() => this.deleteUser(user.id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        <Trans>Delete.1</Trans>
                      </button>
                      <button
                        onClick={() => this.viewUser(user.id)}
                        className="btn btn-outline-info btn-sm"
                      >
                        <Trans>View.1</Trans>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListUser;
