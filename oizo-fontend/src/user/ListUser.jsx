import React, { Component } from "react";
import UserService from "../services/UserService";
import { Trans } from "react-i18next";

class ListUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
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
        <h2 className="text-center">
          <Trans>UsersList.1</Trans>
        </h2>
        <div className="row">
          <br />
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <table className="table ">
                <thead className="thead-dark">
                  <tr>
                    <th>
                      {" "}
                      <Trans>FirstName.1</Trans>
                    </th>
                    <th>
                      <Trans>LastName.1</Trans>{" "}
                    </th>
                    <th>
                      {" "}
                      <Trans>Email.1</Trans>
                    </th>
                    <th>
                      {" "}
                      <Trans>Phone.1</Trans>
                    </th>
                    <th>
                      {" "}
                      <Trans>Address.1</Trans>
                    </th>
                    <th>
                      {" "}
                      <Trans>City.1</Trans>
                    </th>
                    <th>
                      {" "}
                      <Trans>Country.1</Trans>
                    </th>
                    <th>
                      {" "}
                      Actions
                      <button
                        className="btn btn-primary"
                        onClick={this.addUser}
                      >
                        {" "}
                        +
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.id}>
                      <td> {user.firstName} </td>
                      <td> {user.lastName}</td>
                      <td> {user.emailId}</td>
                      <td> {user.phone}</td>
                      <td> {user.address}</td>
                      <td> {user.city}</td>
                      <td> {user.country}</td>
                      <td>
                        <button
                          onClick={() => this.editUser(user.id)}
                          className="btn btn-info"
                        >
                          <Trans>Update.1</Trans>
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.deleteUser(user.id)}
                          className="btn btn-danger"
                        >
                          <Trans>Delete.1</Trans>
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.viewUser(user.id)}
                          className="btn btn-info"
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
        <br />
        <br />
      </div>
    );
  }
}

export default ListUser;
