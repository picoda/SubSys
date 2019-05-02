import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'

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
                <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item
                    name='Submit'
                    active={this.state.activeItem === 'submit'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Grades'
                    active={this.state.activeItem === 'grades'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }
}

export default TopBar;