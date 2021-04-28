import React, { Component } from "react";
import TripService from "../services/TripService";
import { Trans } from "react-i18next";

class ListTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: [],
    };
    this.addTrip = this.addTrip.bind(this);
    this.editTrip = this.editTrip.bind(this);
    this.deleteTrip = this.deleteTrip.bind(this);
  }

  deleteTrip(id) {
    TripService.deleteTrip(id).then((res) => {
      this.setState({
        trips: this.state.trips.filter((trip) => trip.id !== id),
      });
    });
  }
  viewTrip(id) {
    this.props.history.push(`/view-trip/${id}`);
  }
  editTrip(id) {
    this.props.history.push(`/add-trip/${id}`);
  }

  componentDidMount() {
    TripService.getTrips().then((res) => {
      this.setState({ trips: res.data });
    });
  }

  addTrip() {
    this.props.history.push("/add-trip/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">
          <Trans>TripsList.1</Trans>
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
                      <Trans>departure.1</Trans>
                    </th>
                    <th>
                      <Trans>arrival.1</Trans>{" "}
                    </th>
                    <th>
                      {" "}
                      <Trans>departureDate.1</Trans>
                    </th>
                    <th>
                      {" "}
                      <Trans>departureTime.1</Trans>
                    </th>
                    <th>
                      {" "}
                      <Trans>arrivalDate.1</Trans>
                    </th>
                    <th>
                      {" "}
                      <Trans>arrivingTime.1</Trans>
                    </th>
                    <th>
                      {" "}
                      <Trans>meansTransport.1</Trans>
                    </th>
                    <th>
                      {" "}
                      Actions
                      <button
                        className="btn btn-primary"
                        onClick={this.addTrip}
                      >
                        {" "}
                        +
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.trips.map((trip) => (
                    <tr key={trip.id}>
                      <td> {trip.departure} </td>
                      <td> {trip.arrival}</td>
                      <td> {trip.departureDate}</td>
                      <td> {trip.departureTime}</td>
                      <td> {trip.arrivalDate}</td>
                      <td> {trip.arrivingTime}</td>
                      <td> {trip.meansTransport}</td>
                      <td>
                        <button
                          onClick={() => this.editTrip(trip.id)}
                          className="btn btn-info"
                        >
                          <Trans>Update.1</Trans>
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.deleteTrip(trip.id)}
                          className="btn btn-danger"
                        >
                          <Trans>Delete.1</Trans>
                        </button>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.viewTrip(trip.id)}
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

export default ListTrip;
