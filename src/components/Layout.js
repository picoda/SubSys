import React, { Component } from "react";
import TopBar from "./MenuBar/TopBar";
import PageController from "./pages/PageController";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "Home"
    };

    this.setActive = this.setActive.bind(this);
  }

  setActive(page) {
    this.setState({ active: page });
    this.changePage(page);
    console.log(page);
  }

  changePage(page) {

  }

  render() {
    return (
      <div>
        <TopBar activePage={this.setActive} />
      </div>
    );
  }
}

export default Layout;
