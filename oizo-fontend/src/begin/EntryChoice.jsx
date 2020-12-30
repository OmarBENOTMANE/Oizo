import React, { Component } from 'react';

class EntryChoice extends Component {
    render() {
        return (
            <div>
                <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br />
              <h2>Sign up</h2>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Email: </label>
                    <input
                      placeholder="Email"
                      name="mail"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label> Password: </label>
                    <input
                      placeholder="password"
                      name="password"
                      className="form-control"
                    />
                  </div>
                  <br/>
                  <button className="button1">Save</button>
                  <br/>
                  <br/>
                  <br/>
                  <button className="btn btn-primary">Sign up with Facebook</button>
                  <br/>
                  <br/>
                  <button className="btn btn-danger">Sign up with Google</button>
                </form>
              </div>
            </div>
          </div>
        </div>
            </div>
        );
    }
}

export default EntryChoice;