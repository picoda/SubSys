import React from 'react'

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "Home"
        };

        this.setActive = this.setActive.bind(this);
    }

    setActive(page){
        this.setState({active: page});
        this.props.activePage(page);
    }

    render() {
        return (
            <div className="ui inverted segment">
                <div className="ui inverted pointing secondary menu">
                    <a onClick={()=>this.setActive("Home")} id="Home" className="active item">Home</a>
                    <a onClick={()=>this.setActive("Submit")} id="Submit" className="item">Submit</a>
                    <a onClick={()=>this.setActive("Login")} id="Login" className="item right">Login</a>
                    <a onClick={()=>this.setActive("Register")} id="Register" className="item">Register</a>
                </div>
            </div>
        );
    }
}

export default TopBar;