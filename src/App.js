import React, { Component } from 'react';
import './App.css';
import Keys from './Keys';
import ResultCom from './ResultCom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }
  onClick = button => {
    if (button === "=") {
      this.calculate()
    }
    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkRes = ''
    if (this.state.result.includes('--')) {
      checkRes = this.state.result.replace('--', '+')
    }
    else {
      checkRes = this.state.result
    }

    try {
      this.setState({
        result: (eval(checkRes) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div className="calc-body">
          <h1>MY CALCULATOR</h1>
          <h1> </h1>
          <br />
          <ResultCom result={this.state.result} />
          <Keys onClick={this.onClick} />

        </div>
      </div>
    );
  }
}

export default App;
