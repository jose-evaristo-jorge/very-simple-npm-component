import React, { Component } from "react";
import ReactDOM from "react-dom";

import Mvc from 'very-simple-npm-component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding:10,
      }}
      >
        <h3>Test component imported from local source</h3>
        <Mvc
          propExample='Valor passado por props'
          style={{
            outline:'1px solid #eee'
          }} 
        />
      </div>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;