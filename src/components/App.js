import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      buttonValue: "Hey"
    };

    this.call = this.call.bind(this);
  }

  call(){
    fetch("https://sybsys.appspot.com/")
    .then(results => results.text())
    .then(data => this.setState({buttonValue: data}));
  }

  render(){
    return (
      <div>
         <Button onClick={this.call}>{this.state.buttonValue}</Button>
      </div>
    );
  }
}

export default App;