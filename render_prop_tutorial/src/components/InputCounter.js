import React, { Component } from "react";

class InputCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <input onChange={increment} />
        <p>InputCounter: {count}</p>
      </div>
    );
  }
}

export default InputCounter;
