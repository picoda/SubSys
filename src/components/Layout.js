import React from 'react'
import TopBar from './TopBar'

class Layout extends React.Component {
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
            </div>
        );
    }
}

export default Layout;