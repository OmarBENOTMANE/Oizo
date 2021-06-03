import React, { Component } from "react";
import TripService from "../services/TripService";
import { Trans } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    // step 2
    this.state = {
      id: this.props.match.params.id,
      departure: "",
      arrival: "",
      departureDate: "",
      departureTime: "",
      arrivalDate: "",
      arrivingTime: "",
      meansTransport: "",
    };
    this.changeDepartureHandler = this.changeDepartureHandler.bind(this);
    this.changeArrivalHandler = this.changeArrivalHandler.bind(this);
    this.changeDepartureDateHandler = this.changeDepartureDateHandler.bind(this);
    this.changeDepartureTimeHandler = this.changeDepartureTimeHandler.bind(this);
    this.changeArrivalDateHandler = this.changeArrivalDateHandler.bind(this);
    this.changeArrivingTimeHandler = this.changeArrivingTimeHandler.bind(this);
    this.changeMeansTransportHandler = this.changeMeansTransportHandler.bind(this);
    this.saveOrUpdateTrip = this.saveOrUpdateTrip.bind(this);
  }
  // step 3
  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      TripService.getTripById(this.state.id).then((res) => {
        let trip = res.data;
        this.setState({
          departure: trip.departure,
          arrival: trip.arrival,
          departureDate: trip.departureDate,
          departureTime: trip.departureTime,
          arrivalDate: trip.arrivalDate,
          arrivingTime: trip.arrivingTime,
          meansTransport: trip.meansTransport,
        });
      });
    }
  }
  // step 4
  saveOrUpdateTrip = (e) => {
    e.preventDefault();
    let trip = {
      departure: this.state.departure,
      arrival: this.state.arrival,
      departureDate: this.state.departureDate,
      departureTime: this.state.departureTime,
      arrivalDate: this.state.arrivalDate,
      arrivingTime: this.state.arrivingTime,
      meansTransport: this.state.meansTransport,
    };
    console.log("trip => " + JSON.stringify(trip));

    if (this.state.id === "_add") {
      TripService.createTrip(trip).then((res) => {
        this.props.history.push("/trips");
      });
    } else {
      TripService.updateTrip(trip, this.state.id).then((res) => {
        this.props.history.push("/trips");
      });
    }
  };
  // step 5
  changeDepartureHandler = (event) => {
    this.setState({ departure: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeArrivalHandler = (event) => {
    this.setState({ arrival: event.target.value });
  };
  changeDepartureDateHandler = (event) => {
    this.setState({ departureDate: event.target.value });
  };
  changeDepartureTimeHandler = (event) => {
    this.setState({ departureTime: event.target.value });
  };
  changeArrivalDateHandler = (event) => {
    this.setState({ arrivalDate: event.target.value });
  };
  changeArrivingTimeHandler = (event) => {
    this.setState({ arrivingTime: event.target.value });
  };
  changeMeansTransportHandler = (event) => {
    this.setState({ meansTransport: event.target.value });
  };

  cancel() {
    this.props.history.push("/trips");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Trip</h3>;
    } else {
      return (
        <h3 className="text-center">
          <Trans>UpdateTrip.1</Trans>
        </h3>
      );
    }
  }
  render() {
    return (
      <div className="container">
        <br />
        <div className="card col-md-6 offset-md-3"
        style={{ backgroundColor: "pink",}}>
          <br />
          {/* {this.getTitle()} */}
          <h1>
            <Trans>Your Next Trip.1</Trans>
          </h1>
          <br />
          <h5> <Trans>Departure.1</Trans></h5>
          <div className="form-group">
            <input
              placeholder="Departure"
              name="departure"
              className="form-control"
              value={this.state.departure}
              onChange={this.changeDepartureHandler}
            />
          </div>
          <br />
          <h5><Trans>Arrival.1</Trans> </h5>
          <div className="form-group">
            <input
              placeholder="Arrival"
              name="arrival"
              className="form-control"
              value={this.state.arrival}
              onChange={this.changeArrivalHandler}
            />
          </div>
          <br />
          <h5><Trans>Date of departure.1</Trans></h5>
          <div className="form-group">
            <input
              placeholder="Date of departure"
              name="departureDate"
              className="form-control"
              value={this.state.departureDate}
              onChange={this.changeDepartureDateHandler}
            />
          </div>
          <br />
          <h5><Trans>Departure time.1</Trans></h5>
          <div className="form-group">
            <input
              placeholder="Departure time"
              name="departureTime"
              className="form-control"
              value={this.state.departureTime}
              onChange={this.changeDepartureTimeHandler}
            />
          </div>
          <br />
          <h5><Trans>Arrival date.1</Trans></h5>
          <div className="form-group">
            <input
              placeholder="Arrival date"
              name="arrivalDate"
              className="form-control"
              value={this.state.arrivalDate}
              onChange={this.changeArrivalDateHandler}
            />
          </div>
          <br />
          <h5><Trans>Arriving time.1</Trans></h5>
          <div className="form-group">
            <input
              placeholder="Arriving time"
              name="arrivingTime"
              className="form-control"
              value={this.state.arrivingTime}
              onChange={this.changeArrivingTimeHandler}
            />
          </div>
          <br />
          <h5><Trans>Means of transport (optional).1</Trans></h5>
          <div className="form-group">
            <input
              placeholder="Means of transport (optional)"
              name="meansTransport"
              className="form-control"
              value={this.state.meansTransport}
              onChange={this.changeMeansTransportHandler}
            />
          </div>
          <br />
          <Link
            to="/deliver"
            className="pannel millieu"
            onClick={this.saveOrUpdateTrip}
          >
            <Trans>Next.1</Trans>
          </Link>
          <button
            type="button"
            className="btn btn-danger button1"
            onClick={this.cancel.bind(this)}
          >
            <Trans>Cancel.1</Trans>
          </button>
          <br />
        </div>
        <br />
        </div>
    );
  }
}

export default CreateTrip;
