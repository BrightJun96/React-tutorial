import React, { Component } from "react";

class Record extends Component {
  render() {
    const { posx, posy } = this.props;
    return (
      <div>
        <p>x값 : {posx}</p>
        <p>y값 : {posy}</p>
      </div>
    );
  }
}

export default Record;
