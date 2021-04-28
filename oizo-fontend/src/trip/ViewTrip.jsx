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
      <div>
        <br />
        <div className="card col-md-6 offset-md-3">
          <br />
          <h3 className="text-center"> View trip Details</h3>
          <div className="card-body">
            <div className="row">
              <label>
                {" "}
                <Trans>departure.1</Trans>:{" "}
              </label>
              <div> -{this.state.trip.departure}</div>
            </div>
            <div className="row">
              <label>
                {" "}
                <Trans>arrival.1</Trans>:{" "}
              </label>
              <div> -{this.state.trip.arrival} </div>
            </div>
            <div className="row">
              <label>
                {" "}
                <Trans>departureDate.1</Trans>:{" "}
              </label>
              <div> -{this.state.trip.departureDate}</div>
            </div>
            <div className="row">
              <label>
                {" "}
                <Trans>departureTime.1</Trans>:{" "}
              </label>
              <div> -{this.state.trip.departureTime}</div>
            </div>
            <div className="row">
              <label>
                <Trans>arrivalDate.1</Trans>:{" "}
              </label>
              <div>- {this.state.trip.arrivalDate}</div>
            </div>
            <div className="row">
              <label>
                {" "}
                <Trans>arrivingTime.1</Trans>:{" "}
              </label>
              <div> -{this.state.trip.arrivingTime}</div>
            </div>
            <div className="row">
              <label>
                {" "}
                <Trans>meansTransport.1</Trans>:{" "}
              </label>
              <div> -{this.state.trip.meansTransport}</div>
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
