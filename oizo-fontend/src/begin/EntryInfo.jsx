import React, { Component } from 'react';

class EntryInfo extends Component {
    render() {
        return (
            <div>
                <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
              <br />
              <h2 className="center">Sign up</h2>
                <form>
                <br />
                <h2>Toi</h2>
                  <div className="form-group">
                    <input
                      placeholder="First Name"
                      name="fname"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Last Name"
                      name="lname"
                      className="form-control"
                    />
                  </div>
                  <br/>
                  <h2>Your Phone</h2>
                  <div className="form-group">
                    <input
                      placeholder="Phone"
                      name="phone"
                      className="form-control"
                    />
                  </div>
                  <br/>
                  <h2>Your address</h2>
                  <div className="form-group">
                    
                    <input
                      placeholder="Number or Street name"
                      name="address"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Postal code or city name"
                      name="city"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Country"
                      name="country"
                      className="form-control"
                    />
                  </div>
                  <br/>
                  <br/>
                  <button className="button1">Next</button>
                  <br/>
                </form>
              </div>
            </div>
          </div>
        </div>
            </div>
        );
    }
}

export default EntryInfo;