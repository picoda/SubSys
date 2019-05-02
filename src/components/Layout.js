import React from 'react'
import TopBar from './TopBar'

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <TopBar />
            </div>
        );
    }
}

export default Layout;