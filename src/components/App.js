import React from 'react';
import Layout from './Layout';

class App extends React.Component {
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
          <Layout />
      </div>
    );
  }
}

export default App;
//<Button onClick={this.call}>{this.state.buttonValue}</Button>