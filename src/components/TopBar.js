import React from 'react'

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div class="ui inverted segment">
                <div class="ui inverted pointing secondary menu">
                    <a id="Home" class="active item">Home</a>
                    <a id="Su   bmit" class="item">Submit</a>
                    <a id="Login" class="item right">Login</a>
                    <a id="Register" class="item">Register</a>
                </div>
            </div>
        );
    }
}

export default TopBar;