import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav  class="navbar navbar-font">
            <div>
              <a
                href="http://localhost:3000/users"
                class="navbar navbar-light clrbrand"
              >
                Oizo
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}


export default HeaderComponent;
