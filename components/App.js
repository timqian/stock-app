import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* this will render the child routes */}
        {this.props.children}
      </div>
    );
  }
}


export default App;
