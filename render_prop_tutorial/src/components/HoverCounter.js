import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <div
          className="box"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "teal",
          }}
          onMouseOver={increment}
        ></div>
        <p>HoverCounter : {count}</p>
      </div>
    );
  }
}

export default HoverCounter;
