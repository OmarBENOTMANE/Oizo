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
        <br />
        <h2 className="text-center">
          <Trans>List of trips.1</Trans>
        </h2>
        <br />
        <div
          className="card"
          style={{ backgroundColor: "pink",}}>
          <div className="card-body">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>
                    <Trans>Departure.1</Trans>
                  </th>
                  <th>
                    <Trans>Arrival.1</Trans>
                  </th>
                  <th>
                    <Trans>Date of departure.1</Trans>
                  </th>
                  <th>
                    <Trans>Departure time.1</Trans>
                  </th>
                  <th>
                    <Trans>Arrival date.1</Trans>
                  </th>
                  <th>
                    <Trans>Arriving time.1</Trans>
                  </th>
                  <th>
                    <Trans>Means of transport.1</Trans>
                  </th>
                  <th>Actions</th>
                  <th>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={this.addTrip}
                    > +
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
                        className="btn btn-outline-warning btn-sm"
                      >
                        <Trans>Update.1</Trans>
                      </button>
                      <button
                        onClick={() => this.deleteTrip(trip.id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        <Trans>Delete.1</Trans>
                      </button>
                      <button
                        onClick={() => this.viewTrip(trip.id)}
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

export default ListTrip;
