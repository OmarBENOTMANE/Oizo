import React, { Component } from "react";
import TripService from "../services/TripService";
import { Trans } from "react-i18next";

class UpdateTrip extends Component {
  constructor(props) {
    super(props);

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
    this.updateTrip = this.updateTrip.bind(this);
  }

  componentDidMount() {
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

  updateTrip = (e) => {
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
    console.log("id => " + JSON.stringify(this.state.id));
    TripService.updateTrip(trip, this.state.id).then((res) => {
      this.props.history.push("/trips");
    });
  };

  changeDepartureHandler = (event) => {
    this.setState({ departure: event.target.value });
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
  changemMansTransportHandler = (event) => {
    this.setState({ meansTransport: event.target.value });
  };

  cancel() {
    this.props.history.push("/trips");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center"><Trans>UpdateTrip.1</Trans></h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Departure Date: </label>
                    <input
                      placeholder="Departure Date"
                      name="departureDate"
                      className="form-control"
                      value={this.state.departureDate}
                      onChange={this.changeDepartureDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Departure Time: </label>
                    <input
                      placeholder="DepartureTime"
                      name="DepartureTime"
                      className="form-control"
                      value={this.state.departureTime}
                      onChange={this.changeDepartureTimeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Arrival Date: </label>
                    <input
                      placeholder="arrivalDate"
                      name="arrivalDate"
                      className="form-control"
                      value={this.state.arrivalDate}
                      onChange={this.changeArrivalDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> ArrivingTime: </label>
                    <input
                      placeholder="arrivingTime"
                      name="arrivingTime"
                      className="form-control"
                      value={this.state.arrivingTime}
                      onChange={this.changeArrivingTimeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> meansTransport: </label>
                    <input
                      placeholder="meansTransport Address"
                      name="meansTransport"
                      className="form-control"
                      value={this.state.meansTransport}
                      onChange={this.changeMeansTransportHandler}
                    />
                  </div>
                
                  <button className="btn btn-success" onClick={this.updateTrip}>
                   <trans>Save.1</trans>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    <trans>Cancel.1</trans>
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

export default UpdateTrip;
