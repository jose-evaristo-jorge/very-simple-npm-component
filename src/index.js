import React from "react";
import PropTypes from 'prop-types';
import st from "./style";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  };


  render() {

    return(
      <div style={{...this.props.style, ...st.ctn}}>
        <h5>Very-simple-npm-component</h5>
        <br/>
        <p>ExProp1: {this.props.propExample}</p>
      </div>
    );
  }
}

App.propTypes = {
  propExample: PropTypes.string,
  style: PropTypes.object
}
App.defaultProps = {
  style:{},
  autoPlay: false,
}

export default App;
