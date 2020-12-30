import React, { Component } from 'react';

class EntryCode extends Component {
    render() {
        return (
            <div>
              <br/>
                  <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br />
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Enter your code received by sms </label>
                    <br/>
                    <br/>
                    <input
                      placeholder="Code"
                      name="codesms"
                      className="form-control"
                    />
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <button className="button1">Next</button>
                  <br/>
                  <br/>
                  </form>
              </div>
            </div>
          </div>
        </div>
        <br/>
            </div>
        );
    }
}

export default EntryCode;