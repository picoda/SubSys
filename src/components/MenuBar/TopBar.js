import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Home"
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
    this.props.activePage(name);
  }

  render() {
    return (
      <Menu inverted>
        <Menu.Item
          name="home"
          active={this.state.activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="submit"
          active={this.state.activeItem === "submit"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          className="right"
          name="register"
          active={this.state.activeItem === "register"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="login"
          active={this.state.activeItem === "login"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default TopBar;
