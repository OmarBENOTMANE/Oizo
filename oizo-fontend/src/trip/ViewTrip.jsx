import React, { Component } from "react";
import TripService from "../services/TripService";
import { Trans } from "react-i18next";

class ViewTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      trip: {},
    };
  }

  componentDidMount() {
    TripService.getTripById(this.state.id).then((res) => {
      this.setState({ trip: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <br />
        <div
          className="card col-md-6 offset-md-3"
          style={{backgroundColor: "pink"}} >
          <br />
          <h3 className="text-center">
          <Trans>View trip Details.1</Trans></h3>
          <div className="card-body">
            <div>
              <label>
                <Trans>Departure.1</Trans>:
              </label>{" "}
              {this.state.trip.departure}
            </div>
            <div>
              <label>
                <Trans>Arrival.1</Trans>:
              </label>{" "}
              {this.state.trip.arrival}
            </div>
            <div>
              <label>
                <Trans>Date of departure.1</Trans>:
              </label>{" "}
              {this.state.trip.departureDate}
            </div>
            <div>
              <label>
                <Trans>Departure time.1</Trans>:
              </label>{" "}
              {this.state.trip.departureTime}
            </div>
            <div>
              <label>
                <Trans>Arrival date.1</Trans>:{" "}
              </label>{" "}
              {this.state.trip.arrivalDate}
            </div>
            <div>
              <label>
                <Trans>Arriving time.1</Trans>:
              </label>{" "}
              {this.state.trip.arrivingTime}
            </div>
            <div>
              <label>
                <Trans>Means of transport.1</Trans>:
              </label>{" "}
              {this.state.trip.meansTransport}
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default ViewTrip;
