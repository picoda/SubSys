import React, {Component} from 'react';
import TopBar from './TopBar';
import MainPage from "./MainPage";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "Home"
        };

        this.setActive = this.setActive.bind(this);
    }

    setActive(page){
        this.setState({active:page});
        console.log(page);
    }

    render() {
        return (
            <div>
                <TopBar activePage={this.setActive}/>
                <MainPage activePage={this.state.active} />
            </div>
        );
    }
}

export default Layout;