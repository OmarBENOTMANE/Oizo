import React, { Component } from "react";
import { Trans } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";
import TripService from "../services/TripService";
import "./../trip/ListTrip";

class MyTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }
  componentDidMount() {
    TripService.getTrips().then((res) => {
      this.setState({ trips: res.data });
    });
  }
  viewTrip(id) {
    this.props.history.push(`/view-trip/${id}`);
  }
  render() {
    return (
      <div className="container">
        <br />
        <div className="card col-md-6 offset-md-3">
          <h2>
            <Trans>My journeys.1</Trans>
          </h2>
          <br />
          <div>
            <Trans>Waiting for your reply.1</Trans>
          </div>
          <div>
            {this.state.trips.map((trip) => (
              <ul
                key={trip.id}
                type="submit"
                className="pannel"
                onClick={() => this.viewTrip(trip.id)}
              >
                <div>{trip.departure}</div>
                <div>|</div>
                <div>
                  {trip.arrival}
                  <span className="posi30">{trip.departureDate}</span>
                </div>
                <br />
              </ul>
            ))}
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link type="button" className="button1" to="/add-trip/:id">
            <Trans>New journey.1</Trans>
          </Link>
          <br />
          <br />
        </div>
        <br />
      </div>
    );
  }
}

export default MyTrip;
